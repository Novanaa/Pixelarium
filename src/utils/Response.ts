import { Response } from "express";
import { default as responsesMessege } from "../const/readonly/messege";

class APIResponses {
  protected JSONResponse<T>(
    res: Response,
    key: string,
    datas: T[] | T,
    status: number
  ): Response {
    const jsonStatus: string = status == 200 ? "OK" : "KO";
    return res.status(status).json({
      [key]: datas,
      status: jsonStatus,
    });
  }

  protected FailedResponse(
    res: Response,
    messege: string | undefined,
    status: number,
    TypeError: string
  ): Response {
    return res.status(status).json({
      TypeError,
      messege,
      status: "KO",
    });
  }
}

export class SuccessRespones extends APIResponses {
  sendSuccessWithMultipleData<T>(
    res: Response,
    key: string,
    datas: T[]
  ): Response {
    return this.JSONResponse<T>(res, key, datas, 200);
  }
  sendSuccessSingleData<T>(res: Response, key: string, data: T): Response {
    return this.JSONResponse<T>(res, key, data, 200);
  }
  success(res: Response, key: string, usage?: string): Response {
    const status = usage == "create" ? 201 : 200;
    return res.status(status).json({
      [key]: true,
      status: "OK",
    });
  }
}

export class ErrorsRespones extends APIResponses {
  badRequest(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.badRequest,
      400,
      "Bad Request"
    );
  }
  notFound(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.notFound,
      404,
      "Not Found"
    );
  }
  unprocessable(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.unprocessable,
      422,
      "Unprocessable Content"
    );
  }
  unauth(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.unauth,
      401,
      "Unauthorized"
    );
  }
}
