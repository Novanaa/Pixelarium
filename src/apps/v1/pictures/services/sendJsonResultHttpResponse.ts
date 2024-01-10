import { Response } from "express";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";

type SendUploadUserGalleryPictureJsonResultHttpResponseParams = {
  response: Response;
  responseData: unknown;
};

/**
 * Sends an HTTP response for the upload user gallery picture operation.
 *
 * @param {SendUploadUserGalleryPictureJsonResultHttpResponseParams} params - The parameters for sending the HTTP response.
 * @param {Response} params.response - The Express response object.
 * @param {AddUserGalleryPictureResponseData} params.responseData - The response data to be sent.
 * @returns {void}
 */
export default function sendUploadUserGalleryPictureJsonResultHttpResponse<T>({
  response,
  responseData,
}: SendUploadUserGalleryPictureJsonResultHttpResponseParams): void {
  jsonResult<T>({
    response,
    statusCode: http.StatusCreated,
    resultKey: "created",
    dataKey: "data",
    data: responseData,
  });
}
