import { WebResponse } from "./app.model";

export class ResponseError extends WebResponse {
  TypeError: string;
  messege: string;
  date: string;
}
