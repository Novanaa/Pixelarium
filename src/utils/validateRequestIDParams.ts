import { Response } from "express";
import messege from "../const/readonly/messege";
import { ErrorsRespones } from "./Response";

export default function validateRequestIDParams({
  id,
  response,
  except,
}: {
  id: string;
  response: Response;
  except: ErrorsRespones;
}): void | Response {
  if (!/^\d+$/.test(id))
    return except.badRequest(response, messege.wrongRequestID);
}
