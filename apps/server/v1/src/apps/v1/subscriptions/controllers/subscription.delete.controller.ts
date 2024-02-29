import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { Subscription } from "../../../../../packages/prisma/generated/client";
import getUserSubscription from "../../../../utils/getUserSubscription";
import deactivateUserSubs from "../services/deactivateUserSubs";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import validateUserSubscriptionPaymentID from "../../../../utils/validateUserSubscriptionPaymentID";

type DeactivateUserSubscriptionResponseData = {
  user_details: UserWithOptionalChaining;
  deactivated_plan_details: Subscription;
};

export default async function deactivateUserSubscription(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;
    const { payment_id } = req.query;

    if (!payment_id)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "User Subscription Payment ID Must Be Provided",
      });

    const paymentIdValidation: void | Response =
      validateUserSubscriptionPaymentID({
        paymentId: String(payment_id),
        response: res,
      });

    if (paymentIdValidation) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({
        field: "name",
        value: name,
      });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.password;
    delete user.email;

    if (!user.is_member)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "You doesn't have any plan!",
      });

    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user.id
    );

    if (!userSubs)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    if (userSubs.payment_id !== payment_id)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The Payment Subscription ID is Invalid!",
      });

    await deactivateUserSubs(user.id);

    const responseData: DeactivateUserSubscriptionResponseData = {
      user_details: user,
      deactivated_plan_details: userSubs,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: {
        resultKey: "deactivated",
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
