import { Picture } from "../../../../../generated/client";
import { UpdateUserRequestBodySchemaValidation } from "../../../../validations/validateUpdateUserPictureRequestBody";
import PictureInformation from "../interfaces/types/PictureInformation";
import TUpdateUserGalleryPictureField from "../interfaces/types/UpdateUserGalleryPictureField";
import updateUserGalleryPictureFieldMapping from "./updateUserGalleryPictureFieldMapping";
import updateUserPictureGallery from "./updateUserPictureGallery";

type MappingFieldDataUpdateUserGalleryPictureParams = {
  value: UpdateUserRequestBodySchemaValidation;
  pictureInfo: PictureInformation;
  uniquekey: string;
};

/**
 * Updates the user gallery picture with the provided information.
 *
 * @param {MappingFieldDataUpdateUserGalleryPictureParams} params - The parameters for updating the user gallery picture.
 * @param {PictureInformation} params.pictureInfo - The information of the picture.
 * @param {string} params.uniquekey - The unique key of the picture.
 * @param {UpdateUserRequestBodySchemaValidation} params.value - The updated values for the picture.
 * @returns {Promise<Picture>} - The updated picture gallery.
 * @throws {Error} - If the picture uniquekey is not provided.
 */
export default async function mappingFieldDataUpdateUserGalleryPicture({
  pictureInfo,
  uniquekey,
  value,
}: MappingFieldDataUpdateUserGalleryPictureParams): Promise<Picture> {
  if (!uniquekey) throw new Error("The picture uniquekey must be provided");

  const updateUserGalleryPictureField: TUpdateUserGalleryPictureField =
    updateUserGalleryPictureFieldMapping({
      value,
      pictureInfo,
    });

  const updatedPictureGallery: Awaited<Picture> =
    await updateUserPictureGallery({
      uniquekey,
      data: updateUserGalleryPictureField,
    });

  return updatedPictureGallery;
}
