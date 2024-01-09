import { Response } from "express";
import validator from "validator";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";

type ValidatePictureUniquekeyParams = {
  uniquekey: string;
  response: Response;
};

/**
 * Validates the picture unique key.
 *
 * @param {ValidatePictureUniquekeyParams} params - The parameters for validating the picture unique key.
 * @param {string} params.uniquekey - The unique key of the picture.
 * @param {Response} params.response - The response object.
 * @returns {void|Response} - Returns void if the unique key is valid, otherwise returns a response object with a bad request error.
 * @throws {Error} - Throws an error if the unique key is not provided.
 */
export default function validatePictureUniquekey({
  uniquekey,
  response,
}: ValidatePictureUniquekeyParams): void | Response {
  if (!uniquekey) throw new Error("Picture Uniquekey is Provided");

  if (!validator.isUUID(uniquekey))
    return httpBadRequestResponse({
      response,
      errorMessage: "The picture uniquekey must be a valid uniquekey",
    });
}
