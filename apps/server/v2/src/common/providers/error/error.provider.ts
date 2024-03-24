import { ResponseError } from "@/model/error.model";
import { HttpStatus, Injectable } from "@nestjs/common";
import * as moment from "moment";

@Injectable()
export class ErrorProvider {
  public custom({
    TypeError,
    code,
    messege,
  }: Omit<ResponseError, "date" | "status">): ResponseError {
    return {
      TypeError,
      messege,
      date: moment(new Date().getTime()).format("LLL"),
      code,
      status: "KO",
    };
  }

  public notFound(messege?: string): ResponseError {
    messege = !messege
      ? "Oops! The data you are looking for could not be found."
      : messege;

    return this.custom({
      code: HttpStatus.NOT_FOUND,
      messege,
      TypeError: "Not Found",
    });
  }
  public badRequest(messege?: string): ResponseError {
    messege = !messege
      ? "Oops! Your request cannot be processed due to a bad request. Please check your input and try again."
      : messege;

    return this.custom({
      code: HttpStatus.BAD_REQUEST,
      messege,
      TypeError: "Bad Request",
    });
  }
  public unprocessableEntity(messege?: string): ResponseError {
    messege = !messege
      ? "The content you provided could not be processed due to errors in the data. Please review your input and make sure it meets the required format and criteria."
      : messege;

    return this.custom({
      code: HttpStatus.UNPROCESSABLE_ENTITY,
      messege,
      TypeError: "Unprocessable Entity",
    });
  }
  public forbidden(messege?: string): ResponseError {
    messege = !messege
      ? "Oops! Your request conflicts with the server's security policy."
      : messege;

    return this.custom({
      code: HttpStatus.FORBIDDEN,
      messege,
      TypeError: "Forbidden",
    });
  }
  public unauthorized(messege?: string): ResponseError {
    messege = !messege
      ? "You are not authorized to access this resource. Please provide valid credentials or authentication."
      : messege;

    return this.custom({
      code: HttpStatus.UNAUTHORIZED,
      messege,
      TypeError: "Unauthorized",
    });
  }
  public internalServerError(messege?: string): ResponseError {
    messege = !messege
      ? "Oops! We're sorry, but something went wrong. Our server encountered an internal error while processing your request."
      : messege;

    return this.custom({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      messege,
      TypeError: "Internal Server Error",
    });
  }
}
