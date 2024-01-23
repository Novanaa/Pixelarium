import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import validateSubscriptionPaymentOrderId from "../../subscriptions/services/validateSubscriptionPaymentOrderId";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import updateUserPaymentHistoryRequestBodyValidation from "../../../../validations/updateUserPaymentHistoryRequestBodyValidation";
import { UpdateUserPaymentHistoryRequestBodyValidationSchema } from "../../../../validations/interfaces/types/UpdateUserPaymentHistoryRequestBodyValidationSchema";
import validateRequestBody from "../../../../utils/validateRequestBody";
import updateUserPaymentHistoryStatus from "../../subscriptions/services/updateUserPaymentHistoryStatus";
import {
  PaymentsHistory,
  subscriptionStatus,
} from "../../../../../generated/client";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

type UpdateUserPaymentHistoryResponseData = {
  owner: UserWithOptionalChaining;
  updated_data: PaymentsHistory;
};

export default async function updateUserPaymentHistory(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name, orderId } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const orderIdValidation: void | Response =
      validateSubscriptionPaymentOrderId({ orderId, response: res });

    if (orderIdValidation) return;

    const emptyRequestBodyValidation: void | Response =
      validateEmptyRequestBody({ response: res, request: req });

    if (emptyRequestBodyValidation) return;

    const {
      error,
      value,
    }: joi.ValidationResult<UpdateUserPaymentHistoryRequestBodyValidationSchema> =
      updateUserPaymentHistoryRequestBodyValidation(req);

    const requestBodyValidation: void | Response = validateRequestBody({
      res,
      error,
    });

    if (requestBodyValidation) return;

    const status: subscriptionStatus = value.status as subscriptionStatus;

    const updatedPaymentHistoryData: Awaited<PaymentsHistory> =
      await updateUserPaymentHistoryStatus({ status, orderId });

    const responseData: UpdateUserPaymentHistoryResponseData = {
      owner: user,
      updated_data: updatedPaymentHistoryData,
    };

    return sendJsonResultHttpResponse<UpdateUserPaymentHistoryResponseData>({
      response: res,
      responseData,
      options: { resultKey: "updated" },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
