import { Response } from "express";
import http from "../../const/readonly/httpStatusCode";

/**
 * Defines the shape of the httpFailedResponse function argument
 */
type HttpFailedResponseType = {
  statusCode: number;
  response: Response;
  messege?: string;
  TypeError: string;
};

/**
 * A utility function that generates an HTTP response with the given status code and error details.
 *
 * @param options - An object containing the status code, response object, error message, and error type.
 * @returns The updated response object with the error message and status.
 */
export function httpFailedResponse({
  response,
  messege,
  statusCode,
  TypeError,
}: HttpFailedResponseType): Response {
  // Return the response object with the given status code and JSON error details
  return response.status(statusCode).json({
    TypeError,
    messege,
    status: "KO",
  });
}

type JsonResultType = {
  response: Response;
  statusCode: number;
  resultKey: string;
  data: unknown;
  dataKey: string;
};

/**
 * A utility function to generate a JSON response with the provided data and resultKey.
 *
 * @param {JsonResultType} options - Options for the JSON response.
 * @returns {Response} The JSON response with the provided data and resultKey.
 */
export function jsonResult<T>({
  response,
  statusCode,
  resultKey,
  data,
  dataKey,
}: JsonResultType): Response {
  // Return the response with the specified status code, containing a JSON object with the data and resultKey
  return response.status(statusCode || http.StatusOk).json({
    [dataKey]: data as T,
    [resultKey]: true,
    status: "OK",
  });
}
