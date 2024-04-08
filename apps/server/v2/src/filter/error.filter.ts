/* eslint-disable indent */

import { ErrorProvider } from "@/common/providers";
import { ResponseError } from "@/model/error.model";
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";
import { Response } from "express";

export class ResponseException extends ResponseError {
  error: string;
}

@Catch(HttpException)
export class ApplicationExceptionFilter
  implements ExceptionFilter<HttpException>
{
  catch(exception: HttpException, host: ArgumentsHost) {
    const http: HttpArgumentsHost = host.switchToHttp();
    const response: Response = http.getResponse<Response>();
    const status: number = exception.getStatus();
    const exceptionResponse: ResponseException =
      exception.getResponse() as ResponseException;

    return response.status(status).json(
      new ErrorProvider().custom({
        code: status,
        messege: exceptionResponse.messege || exception.message,
        TypeError:
          exceptionResponse.TypeError ||
          exceptionResponse.error ||
          exception.name,
      })
    );
  }
}
