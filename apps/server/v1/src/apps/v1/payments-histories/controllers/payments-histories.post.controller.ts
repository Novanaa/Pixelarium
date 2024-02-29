import { default as joi } from "joi";
import { Response, Request } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import addUserPaymentHistoryRequestBodyValidation from "../../../../validations/addUserPaymentHistoryRequestBodyValidation";
import validateRequestBody from "../../../../utils/validateRequestBody";
import AddUserPaymentHistorySchemaValidation from "../../../../validations/interfaces/types/AddUserPaymentHistorySchemaValidation";
import getUserSubscriptionPrice from "../../subscriptions/services/getUserSubscriptionPrice";
import PremiumUserPlan from "../../subscriptions/interfaces/types/PremiumUserPlan";
import insertUserPaymentHistoryData, {
  PaymentHistoryData,
} from "../services/insertUserPaymentHistoryData";
import { PaymentsHistory } from "../../../../../packages/prisma/generated/client";
import convertUSDToIDR from "../../subscriptions/services/convertUSDToIDR";
import getRoundedNumber from "../../../../utils/getRoundedNumber";
import getUserPaymentHistoryByOrderId from "../../subscriptions/services/getUserPaymentHistoryByOrderId";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import http from "../../../../const/readonly/httpStatusCode";

type AddPaymentHistoryResponseData = {
  owner: UserWithOptionalChaining;
  inserted_data: PaymentsHistory;
};

export default async function addPaymentHistory(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const emptyRequestBodyValidation: void | Response =
      validateEmptyRequestBody({ response: res, request: req });

    if (emptyRequestBodyValidation) return;

    const {
      error,
      value,
    }: joi.ValidationResult<AddUserPaymentHistorySchemaValidation> =
      addUserPaymentHistoryRequestBodyValidation(req);

    const requestBodyValidation: void | Response = validateRequestBody({
      res,
      error,
    });

    if (requestBodyValidation) return;

    const userOrderId: string = value.order_id as string;
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getUserPaymentHistoryByOrderId({
        userId: user.id,
        orderId: userOrderId,
      });

    if (userPaymentHistory)
      return httpBadRequestResponse({
        response: res,
        errorMessage: `The payment request with orderId => ${userOrderId} has already been created!`,
      });

    const userPlan: PremiumUserPlan = value.plan as PremiumUserPlan;
    const quantity: number = value.interval_count as number;

    const userPlanPrices: number = getUserSubscriptionPrice(userPlan);
    const userPlanPricesCalculation: number = userPlanPrices * quantity;
    const amountInIdr: number = await convertUSDToIDR(
      userPlanPricesCalculation
    );

    const paymentHistoryData: PaymentHistoryData = {
      ...value,
      user_id: user.id,
      amount: {
        IDR: getRoundedNumber(amountInIdr),
        USD: userPlanPricesCalculation,
      },
    };

    const insertedData: Awaited<PaymentsHistory> =
      await insertUserPaymentHistoryData({ data: paymentHistoryData });

    const responseData: AddPaymentHistoryResponseData = {
      owner: user,
      inserted_data: insertedData,
    };

    return sendJsonResultHttpResponse<AddPaymentHistoryResponseData>({
      response: res,
      responseData,
      options: {
        resultKey: "created",
        statusCode: http.StatusCreated,
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
