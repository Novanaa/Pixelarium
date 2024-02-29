import { Response } from "express";
import { jsonResult } from "../utils/responses/httpApiResponses";
import http from "../const/readonly/httpStatusCode";

type SendJsonResultHttpResponseParams = {
  response: Response;
  responseData: unknown;
  options?: SendJsonResultHttpResponseOptions;
};

type SendJsonResultHttpResponseOptions = {
  statusCode?: number;
  resultKey?: string;
};

/**
 * Sends a JSON result HTTP response.
 *
 * @param {Object} options - The options for the HTTP response.
 * @param {Response} options.response - The Express response object.
 * @param {unknown} options.responseData - The data to be included in the response.
 * @param {string} [options.usage="create"] - The usage of the response (default: "create").
 * @returns {void}
 */
export default function sendJsonResultHttpResponse<T>({
  response,
  responseData,
  options,
}: SendJsonResultHttpResponseParams): void {
  jsonResult<T>({
    response,
    statusCode: options?.statusCode || http.StatusOk,
    resultKey: options?.resultKey || "isSuccess",
    dataKey: "data",
    data: responseData,
  });
}
