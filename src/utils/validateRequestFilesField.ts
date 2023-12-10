import { Response, Request } from "express";
import validator from "validator";
import { ErrorsRespones } from "./Response";

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
