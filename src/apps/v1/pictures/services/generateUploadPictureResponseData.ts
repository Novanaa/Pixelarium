import { Picture } from "../../../../../generated/client";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export type AddUserGalleryPictureResponseData = {
  owner: UserWithOptionalChaining;
  inserted_data: Picture;
  inserted: boolean;
};

type GenerateUploadPictureResponseDataParams = {
  insertedPicture: Picture;
  user: UserWithOptionalChaining;
};

/**
 * Generates the response data for uploading a picture.
 *
 * @param {GenerateUploadPictureResponseDataParams} params - The parameters for generating the response data.
 * @param {Picture} params.insertedPicture - The inserted picture.
 * @param {UserWithOptionalChaining} params.user - The user with optional chaining.
 * @returns {AddUserGalleryPictureResponseData} The generated response data.
 */
export default function generateUploadPictureResponseData({
  insertedPicture,
  user,
}: GenerateUploadPictureResponseDataParams) {
  const responseData: AddUserGalleryPictureResponseData = {
    owner: user,
    inserted_data: insertedPicture,
    inserted: true,
  };

  return responseData;
}
