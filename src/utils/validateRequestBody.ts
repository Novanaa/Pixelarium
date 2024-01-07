import Joi from "joi";
import { Response } from "express";
import { httpUnprocessableContentResponse } from "./responses/httpErrorsResponses";

/**
 * The function validates a request body and returns an error response if the validation fails.
 * @export
 * @param {({
 *   res: Response;
 *   value: Joi.ValidationResult;
 *   error: Joi.ValidationError | undefined;
 *   except: ErrorsRespones;
 *   usage?: "update";
 * })} {
 *   res,
 *   value,
 *   error,
 *   except,
 *   usage,
 * }
 * @returns either `void` or a `Response` object.
 */
export default function validateRequestBody({
  res,
  error,
}: {
  res: Response;
  error: Joi.ValidationError | undefined;
}): void | Response {
  if (error)
    return httpUnprocessableContentResponse({
      response: res,
      errorMessage: error.message.replace(/"/g, ""),
    });
}
