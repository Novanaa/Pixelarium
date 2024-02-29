import { Response, Request } from "express";
import validator from "validator";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";
/**
 * The function validates if a specific field is present in the files object of a request and returns
 * an error response if it is not.
 * @export
 * @param {{
 *   request: Request;
 *   response: Response;
 *   field: string;
 * }} {
 *   response,
 *   request,
 *   field,
 *   except,
 * }
 * @returns the result of the `except.badRequest` function call.
 */
export default function validateRequestFilesField({
  response,
  request,
  field,
}: {
  request: Request;
  response: Response;
  field: string;
}) {
  const keys: string[] = Object.keys(request.files!);
  const errorMessage: string = `'${
    keys[0].charAt(0).toUpperCase() + keys[0].slice(1)
  }' doesn't allowed`;
  if (!validator.contains(field, keys))
    return httpBadRequestResponse({
      response,
      errorMessage,
    });
}
