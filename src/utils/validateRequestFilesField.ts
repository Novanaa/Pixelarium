import { Response, Request } from "express";
import validator from "validator";
import { ErrorsRespones } from "./Response";
/**
 * The function validates if a specific field is present in the files object of a request and returns
 * an error response if it is not.
 * @export
 * @param {{
 *   request: Request;
 *   except: ErrorsRespones;
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
  except,
}: {
  request: Request;
  except: ErrorsRespones;
  response: Response;
  field: string;
}) {
  const keys: string[] = Object.keys(request.files!);
  if (!validator.contains(field, keys))
    return except.badRequest(
      response,
      `'${keys[0].charAt(0).toUpperCase() + keys[0].slice(1)}' doesn't allowed`
    );
}
