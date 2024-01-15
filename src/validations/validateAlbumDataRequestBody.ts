import { default as joi } from "joi";
import { Request } from "express";
import AddAlbumDataRequestBody from "./interfaces/types/AddAlbumDataRequestBody";

/**
 * Validates the request body for adding an existing picture album.
 *
 * @param request - The Express request object.
 * @returns A Joi validation result for the request body.
 */
export default function validateAddExistingPictureAlbumRequestBody(
  request: Request
): joi.ValidationResult<AddAlbumDataRequestBody> {
  const schema: joi.ObjectSchema<AddAlbumDataRequestBody> = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    is_private: joi.boolean().default(false),
  });

  return schema.validate(request.body);
}
