import { Response } from "express";
import { default as responsesMessege } from "../const/readonly/messege";

/* The APIResponses class provides methods for generating JSON responses for successful and failed API
requests. */
class APIResponses {
  /**
   * The function `JSONResponse` takes in a response object, a key, data, and a status code, and returns
   * a JSON response with the data and status.
   * @param {Response} res - The `res` parameter is the response object that will be sent back to the
   * client. It is used to set the status code and send the JSON response.
   * @param {string} key - The `key` parameter is a string that represents the key under which the data
   * will be stored in the JSON response.
   * @param {T[] | T} datas - The `datas` parameter can be either an array of type `T` or a single object
   * of type `T`.
   * @param {number} status - The `status` parameter is the HTTP status code that will be returned in the
   * response. It indicates the success or failure of the request.
   * @returns a Response object.
   */
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

  /**
   * The function returns a failed response with a specific status, error type, and message.
   * @param {Response} res - The `res` parameter is the response object that will be sent back to the
   * client.
   * @param {string | undefined} messege - The `messege` parameter is a string that represents the error
   * message to be included in the response.
   * @param {number} status - The `status` parameter is a number that represents the HTTP status code of
   * the response. It indicates the success or failure of the request.
   * @param {string} TypeError - The `TypeError` parameter is a string that represents the type of error
   * that occurred. It is used to provide additional information about the error that caused the response
   * to fail.
   * @returns a Response object.
   */
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

/* The SuccessResponses class provides methods for sending success responses with multiple data or
single data, as well as a generic success method. */
export class SuccessRespones extends APIResponses {
  /**
   * The function sends a successful response with multiple data items in TypeScript.
   * @param {Response} res - The `res` parameter is the response object that will be sent back to the
   * client. It is typically an instance of the `Response` class.
   * @param {string} key - The key parameter is a string that represents the key or property name under
   * which the data will be stored in the response object.
   * @param {T[]} datas - An array of data of type T.
   * @returns a Response object.
   */
  sendSuccessWithMultipleData<T>(
    res: Response,
    key: string,
    datas: T[]
  ): Response {
    return this.JSONResponse<T>(res, key, datas, 200);
  }
  /**
   * The function sends a successful response with a single data object in JSON format.
   * @param {Response} res - The "res" parameter is the response object that will be sent back to the
   * client. It contains information such as the status code, headers, and the response body.
   * @param {string} key - The "key" parameter is a string that represents the key or property name
   * under which the data will be stored in the response object.
   * @param {T} data - The `data` parameter is the actual data that you want to send as a response. It
   * can be of any type, as it is a generic parameter `T`.
   * @returns a Response object.
   */
  sendSuccessSingleData<T>(res: Response, key: string, data: T): Response {
    return this.JSONResponse<T>(res, key, data, 200);
  }
  /**
   * The function returns a JSON response with a specified key and status code based on the usage
   * parameter.
   * @param {Response} res - The `res` parameter is the response object that will be returned by the
   * function. It is of type `Response`, which is typically an object provided by a web framework or
   * library to handle HTTP responses.
   * @param {string} key - The `key` parameter is a string that represents the key in the response
   * object where the value `true` will be assigned.
   * @param {string} [usage] - The `usage` parameter is an optional string that indicates the purpose
   * or context of the response. It can have two possible values: "create" or undefined.
   * @returns a Response object.
   */
  success(res: Response, key: string, usage?: string): Response {
    const status = usage == "create" ? 201 : 200;
    return res.status(status).json({
      [key]: true,
      status: "OK",
    });
  }
}

/* The ErrorsRespones class provides methods for handling different types of error responses in an API. */
export class ErrorsRespones extends APIResponses {
  /**
   * The function returns a failed response with a bad request status code and an optional error
   * message.
   * @param {Response} res - The `res` parameter is the response object that will be sent back to the
   * client. It contains information such as the status code, headers, and the response body.
   * @param {string} [messege] - The `messege` parameter is an optional string that represents the
   * error message to be included in the response. If no message is provided, it will default to the
   * value of `responsesMessege.badRequest`.
   * @returns a Response object.
   */
  badRequest(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.badRequest,
      400,
      "Bad Request"
    );
  }
  /**
   * The function returns a response with a "Not Found" status code and an optional error message.
   * @param {Response} res - The `res` parameter is the response object that will be sent back to the
   * client. It contains information about the HTTP response, such as the status code, headers, and
   * body.
   * @param {string} [messege] - The `messege` parameter is an optional string that represents the
   * custom error message to be returned in the response. If no custom message is provided, the default
   * message from the `responsesMessege` object will be used.
   * @returns a Response object.
   */
  notFound(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.notFound,
      404,
      "Not Found"
    );
  }
  /**
   * The function `unprocessable` returns a response with a status code of 422 and a message of
   * "Unprocessable Content" if provided, or a default message if not provided.
   * @param {Response} res - The `res` parameter is the response object that will be returned by the
   * function. It is of type `Response`, which is likely a custom class or interface defined in your
   * codebase.
   * @param {string} [messege] - The `messege` parameter is an optional string that represents the
   * error message to be returned in the response. If no message is provided, the default error message
   * "Unprocessable Entity" will be used.
   * @returns a Response object.
   */
  unprocessable(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.unprocessable,
      422,
      "Unprocessable Content"
    );
  }
  /**
   * The function "unauth" returns a failed response with a default or custom message and a status code
   * of 401 (Unauthorized).
   * @param {Response} res - The `res` parameter is of type `Response`, which represents the HTTP
   * response object. It is used to send the response back to the client.
   * @param {string} [messege] - The `messege` parameter is an optional string that represents the
   * message to be included in the response. If no message is provided, it will default to the value of
   * `responsesMessege.unauth`.
   * @returns a Response object.
   */
  unauth(res: Response, messege?: string): Response {
    return this.FailedResponse(
      res,
      messege || responsesMessege.unauth,
      401,
      "Unauthorized"
    );
  }
}
