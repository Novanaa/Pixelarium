import { Response } from "express";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";
import orderIdPattern from "../../../../const/readonly/orderIdPattern";

type ValidateSubscriptionPaymentOrderIdParams = {
  orderId: string;
  response: Response;
};

/**
 * Validates the subscription payment order ID.
 *
 * @param {ValidateSubscriptionPaymentOrderIdParams} params - The parameters for validating the order ID.
 * @param {string} params.orderId - The order ID to be validated.
 * @param {Response} params.response - The response object to send the error response.
 * @returns {void|Response} - Returns void if the order ID is valid, otherwise returns a Response object with a bad request error.
 */
export default function validateSubscriptionPaymentOrderId({
  orderId,
  response,
}: ValidateSubscriptionPaymentOrderIdParams): void | Response {
  if (!orderIdPattern.test(orderId))
    return httpBadRequestResponse({
      response,
      errorMessage: "Invalid order_id request!",
    });
}
