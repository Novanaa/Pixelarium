import { Response } from "express";
import { jsonResult } from "../utils/responses/httpApiResponses";
import http from "../const/readonly/httpStatusCode";

type SendJsonResultHttpResponseParams = {
  response: Response;
  responseData: unknown;
};

/**
 * Sends an HTTP response for the upload user gallery picture operation.
 *
 * @param {SendJsonResultHttpResponseParams} params - The parameters for sending the HTTP response.
 * @param {Response} params.response - The Express response object.
 * @param {AddUserGalleryPictureResponseData} params.responseData - The response data to be sent.
 * @returns {void}
 */
export default function sendJsonResultHttpResponse<T>({
  response,
  responseData,
}: SendJsonResultHttpResponseParams): void {
  jsonResult<T>({
    response,
    statusCode: http.StatusCreated,
    resultKey: "created",
    dataKey: "data",
    data: responseData,
  });
}
