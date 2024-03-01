import { Request, Response } from "express";
import pricesList from "../../../../../resources/prices-list.json";
import logger from "../../../../libs/configs/logger";
import { CLIENT_FRONTEND_URL } from "../../../../const/env";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import {
  PaymentsHistory,
  Subscription,
} from "../../../../../packages/prisma/generated/client";
import getUserSubscription from "../../../../utils/getUserSubscription";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import subscriptionTypeParams from "../const/readonly/subscriptionTypeParams";
import validateSubscriptionPaymentOrderId from "../services/validateSubscriptionPaymentOrderId";
import getUserPaymentHistoryByOrderId from "../services/getUserPaymentHistoryByOrderId";
import updateUserPaymentHistoryStatus from "../services/updateUserPaymentHistoryStatus";
import upgradeUserSubscriptionPlan from "../services/upgradeUserSubscriptionPlan";
import generateUserSubscriptionPaymentID from "../../../../utils/generateUserSubscriptionPaymentID";
import { getFutureDateTimeInDays } from "../../../../utils/getFutureDateTime";

export function prices(_: Request, res: Response): Response {
  return res.status(200).json(pricesList);
}

type UserSubscriptionStatusResponseData = {
  user_details: UserWithOptionalChaining;
  subscription_details: Subscription;
};

export async function userSubscriptionStatus(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({
        field: "name",
        value: name,
      });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.password;
    delete user.email;

    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user.id
    );

    if (!userSubs)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: UserSubscriptionStatusResponseData = {
      user_details: user,
      subscription_details: userSubs,
    };

    return sendJsonResultHttpResponse({ response: res, responseData });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}

export async function subscriptionPaymentsCallback(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { order_id, type } = req.query;
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({
        field: "name",
        value: name,
      });

    if (!user) return httpNotFoundResponse({ response: res });

    if (!order_id || !type)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The order_id params and type must be included",
      });

    const orderIdValidation: void | Response =
      validateSubscriptionPaymentOrderId({
        orderId: String(order_id),
        response: res,
      });

    if (orderIdValidation) return;

    if (!subscriptionTypeParams.includes(String(type)))
      return httpBadRequestResponse({
        response: res,
        errorMessage: `Invalid query params 'type', must be one of => ${subscriptionTypeParams}`,
      });

    const failedPageUrl: string = `${CLIENT_FRONTEND_URL}/payments/status/failed?order_id=${order_id}`;
    const pendingPageUrl: string = `${CLIENT_FRONTEND_URL}/payments/status/pending?order_id=${order_id}`;

    const paymentHistory: Awaited<PaymentsHistory | null> =
      await getUserPaymentHistoryByOrderId({
        orderId: String(order_id),
        userId: user.id,
      });

    if (!paymentHistory)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "You doesn't have any payment request!",
      });

    if (type == "failed") {
      await updateUserPaymentHistoryStatus({
        orderId: String(order_id),
        status: "failed",
        userId: user.id,
      });

      res.redirect(failedPageUrl);
    }

    if (type == "pending") {
      await updateUserPaymentHistoryStatus({
        orderId: String(order_id),
        status: "pending",
        userId: user.id,
      });
      res.redirect(pendingPageUrl);
    }

    if (type == "success") {
      const successPageUrl: string = `${CLIENT_FRONTEND_URL}/payments/status/success?order_id=${order_id}`;
      const userPaymenrId: string = generateUserSubscriptionPaymentID({
        name: user.name,
        plan: paymentHistory.plan,
      });

      await updateUserPaymentHistoryStatus({
        orderId: String(order_id),
        status: "success",
        userId: user.id,
      });

      const endDateCalculation: number = 30 * paymentHistory.interval_count;
      const startDate: Date = new Date();
      const endDate: Date = getFutureDateTimeInDays({
        futureDateTimeInDays: endDateCalculation,
      });
      const nextPaymentDate: Date = getFutureDateTimeInDays({
        futureDateTimeInDays: endDateCalculation + 3,
      });

      await upgradeUserSubscriptionPlan({
        plan: paymentHistory.plan,
        intervalCount: paymentHistory.interval_count,
        paymentId: userPaymenrId,
        startDate,
        userId: user.id,
        endDate,
        nextPaymentDate,
      });

      res.redirect(successPageUrl);
    }
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}