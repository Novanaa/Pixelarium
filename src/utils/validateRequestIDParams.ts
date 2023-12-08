import validator from "validator";
import { Response } from "express";
import messege from "../const/readonly/messege";
import { ErrorsRespones } from "./Response";

export default function validateRequestIDParams({
  id,
  response,
}: {
  id: string;
  response: Response;
}): void | Response {
  const Error: ErrorsRespones = new ErrorsRespones();
  if (!validator.isNumeric(id))
    return Error.badRequest(response, messege.wrongRequestID);
}
