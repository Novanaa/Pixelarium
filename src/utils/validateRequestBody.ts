import Joi from "joi";
import { Response } from "express";
import messege from "../const/readonly/messege";
import {
  httpBadRequestResponse,
  httpUnprocessableContentResponse,
} from "./responses/httpErrorsResponses";

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
  value,
  error,
  usage = "update",
}: {
  res: Response;
  value: Joi.ValidationResult;
  error: Joi.ValidationError | undefined;
  usage?: string;
}): void | Response {
  if (usage !== "update") {
    if (Object.keys(value).length == 0)
      return httpBadRequestResponse({
        response: res,
        errorMessage: messege.emptyFields,
      });
  }
  if (error)
    return httpUnprocessableContentResponse({
      response: res,
      errorMessage: error.message.replace(/"/g, ""),
    });
}
