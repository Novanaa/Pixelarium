import { Response } from "express";
import messege from "../const/readonly/messege";
import Joi from "joi";
import { ErrorsRespones } from "./Response";

export default function validateRequestBody({
  res,
  value,
  error,
  except,
  usage,
}: {
  res: Response;
  value: Joi.ValidationResult;
  error: Joi.ValidationError | undefined;
  except: ErrorsRespones;
  usage?: "update";
}): void | Response {
  if (usage !== "update") {
    if (Object.keys(value).length == 0)
      return except.badRequest(res, messege.emptyFields);
  }
  if (error) return except.unprocessable(res, error.message.replace(/"/g, ""));
}
