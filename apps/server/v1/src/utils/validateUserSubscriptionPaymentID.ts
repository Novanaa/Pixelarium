import { Response } from "express";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";

type ValidateUserSubscriptionPaymentID = {
  paymentId: string;
  response: Response;
};

/**
 * Validates the user subscription payment ID.
 *
 * @param {ValidateUserSubscriptionPaymentID} params - The parameters for validating the user subscription payment ID.
 * @param {string} params.paymentId - The payment ID to be validated.
 * @param {Response} params.response - The response object.
 * @returns {void|Response} - Returns void if the payment ID is valid, otherwise returns a response object with a bad request error.
 */
export default function validateUserSubscriptionPaymentID({
  paymentId,
  response,
}: ValidateUserSubscriptionPaymentID): void | Response {
  const pattern: RegExp = /^pxlmpid-[0-9a-f]{64}$/;
  if (!pattern.test(paymentId))
    return httpBadRequestResponse({
      response,
      errorMessage:
        "The Payment Subscription ID Must Be a Valid Pixelarium Payment ID!",
    });
}
