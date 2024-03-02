import { UpdateUserRequestBodySchemaValidation } from "../../../../validations/validateUpdateUserPictureRequestBody";
import PictureInformation from "../interfaces/types/PictureInformation";
import TUpdateUserGalleryPictureField from "../interfaces/types/UpdateUserGalleryPictureField";

type UpdateUserGalleryPictureFieldMappingParams = {
  value: UpdateUserRequestBodySchemaValidation;
  pictureInfo: PictureInformation;
};

/**
 * Maps the given values and picture information to a TUpdateUserGalleryPictureField object.
 *
 * @param {UpdateUserGalleryPictureFieldMappingParams} params - The parameters for the mapping.
 * @param {UpdateUserRequestBodySchemaValidation} params.value - The value to be mapped.
 * @param {PictureInformation} params.pictureInfo - The picture information to be mapped.
 * @returns {TUpdateUserGalleryPictureField} - The mapped TUpdateUserGalleryPictureField object.
 */
export default function updateUserGalleryPictureFieldMapping({
  value,
  pictureInfo,
}: UpdateUserGalleryPictureFieldMappingParams): TUpdateUserGalleryPictureField {
  const fieldMapping: TUpdateUserGalleryPictureField = {
    title: value.title,
    description: value.description,
    url: value.image_url,
    expires_in: value.expiresInDays || null,
    is_private: value.is_private,
    filename: pictureInfo.filename,
    extension: pictureInfo.extension,
    is_external_picture: pictureInfo.is_external_picture,
  };

  return fieldMapping;
}
