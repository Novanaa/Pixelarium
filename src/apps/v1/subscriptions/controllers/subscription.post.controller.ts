import { v4 as uuidv4 } from "uuid";
import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import tokenizerRequestBodyValidation from "../../../../validations/tokenizerRequestBodyValidation";
import TokenizerRequestBodyValidation from "../../../../validations/interfaces/types/TokenizerRequestBodyValidation";
import validateRequestBody from "../../../../utils/validateRequestBody";
import TokenPaymentDataPayload from "../interfaces/types/TokenPaymentDataPayload";
import generatePaymentOrderId from "../services/generatePaymentOrderId";
import convertUSDToIDR from "../services/convertUSDToIDR";
import TokenPaymentData from "../interfaces/types/TokenPaymentData";
import getSubscriptionPaymentToken from "../services/getSubscriptionPaymentToken";
import getUserSubscriptionPrice from "../services/getUserSubscriptionPrice";
import getRoundedNumber from "../../../../utils/getRoundedNumber";
import PremiumUserPlan from "../interfaces/types/PremiumUserPlan";
import TransactionSecretData from "../interfaces/types/TransactionSecretData";
import OrderedSubscriptionPlan from "../interfaces/types/OrderedSubscriptionPlan";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import http from "../../../../const/readonly/httpStatusCode";

type TokenizerResponseData = {
  request_from: UserWithOptionalChaining;
  transaction_secret: TransactionSecretData;
  ordered_plan: OrderedSubscriptionPlan;
};

export default async function tokenizer(
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

    const emptyRequestBodyValidation: void | Response =
      validateEmptyRequestBody({ response: res, request: req });

    if (emptyRequestBodyValidation) return;

    const {
      error,
      value,
    }: joi.ValidationResult<TokenizerRequestBodyValidation> =
      tokenizerRequestBodyValidation(req);

    const requestBodyValidation: void | Response = validateRequestBody({
      res,
      error,
    });

    if (requestBodyValidation) return;

    const selectedUserPlan: PremiumUserPlan = value.data.items_details
      .plan as PremiumUserPlan;
    const getSubsPrice: number | null =
      getUserSubscriptionPrice(selectedUserPlan);
    const quantity: number = value.data.interval_count_in_month as number;

    const orderId: string = generatePaymentOrderId();

    const [subsPrice] = await Promise.all([
      convertUSDToIDR(getSubsPrice) as Promise<number>,
    ]);
    const roundedItemPrice: number = getRoundedNumber(subsPrice);

    const subscriptionPaymentTokenPayload: TokenPaymentDataPayload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: roundedItemPrice * quantity,
      },
      item_details: {
        id: uuidv4(),
        name: selectedUserPlan,
        quantity,
        price: roundedItemPrice,
      },
      credit_card: { secure: true },
    };

    const subscriptionPaymentTokenData: Awaited<TokenPaymentData | null> =
      await getSubscriptionPaymentToken(subscriptionPaymentTokenPayload);

    if (!subscriptionPaymentTokenData)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const orderedSubsPlan: OrderedSubscriptionPlan = {
      currency: "USD",
      interval: "Moth",
      interval_count: quantity,
      name: selectedUserPlan,
      price: getSubsPrice,
      total_price: getSubsPrice * quantity,
    };

    const transactionSecret: TransactionSecretData = {
      transaction_token: subscriptionPaymentTokenData.token,
      redirect_url: subscriptionPaymentTokenData.redirect_url,
    };

    const responseData: TokenizerResponseData = {
      request_from: user,
      ordered_plan: orderedSubsPlan,
      transaction_secret: transactionSecret,
    };

    return sendJsonResultHttpResponse<TokenizerResponseData>({
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
