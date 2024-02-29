import { Response } from "express";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import {
  UpdateUserPictureResponseData,
  generateUpdateUserPictureResponseData,
} from "./generateHttpResponseData";
import { Picture } from "../../../../../packages/prisma/generated/client";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

type GenerateResponseDataAndSendHttpJsonResultResponseParams = {
  old_data: Picture;
  owner: UserWithOptionalChaining;
  updated_data: Picture;
  response: Response;
};

/**
 * Generates the response data for updating a user picture and sends it as a JSON result HTTP response.
 *
 * @param {GenerateResponseDataAndSendHttpJsonResultResponseParams} params - The parameters for generating the response data and sending the HTTP response.
 * @param {Picture} params.old_data - The old picture data.
 * @param {UserWithOptionalChaining} params.owner - The user who owns the picture.
 * @param {Response} params.response - The HTTP response object.
 * @param {Picture} params.updated_data - The updated picture data.
 * @returns {Response | void} The HTTP response object or void.
 */
export default function generateResponseDataAndSendHttpJsonResultResponse({
  old_data,
  owner,
  response,
  updated_data,
}: GenerateResponseDataAndSendHttpJsonResultResponseParams): Response | void {
  const responseData: UpdateUserPictureResponseData =
    generateUpdateUserPictureResponseData({
      old_data,
      updated_data,
      owner,
    });

  return sendJsonResultHttpResponse<UpdateUserPictureResponseData>({
    response,
    responseData,
    usage: "patch",
  });
}
