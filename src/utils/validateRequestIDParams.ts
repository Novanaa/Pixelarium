import { Response } from "express";
import messege from "../const/readonly/messege";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";

/**
 * The function validates the request ID parameter and returns a response if it is not a valid number.
 * @export
 * @param {{
 *   id: string;
 *   response: Response;
 *   except: ErrorsRespones;
 * }} {
 *   id,
 *   response,
 *   except,
 * }
 * @returns either `void` or a `Response` object.
 */
export default function validateRequestIDParams({
  id,
  response,
}: {
  id: string;
  response: Response;
}): void | Response {
  if (!/^\d+$/.test(id))
    return httpBadRequestResponse({
      response,
      errorMessage: messege.wrongRequestID,
    });
}
