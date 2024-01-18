import { default as joi } from "joi";
import { Request } from "express";
import AddAlbumDataRequestBody from "./interfaces/types/AddAlbumDataRequestBody";

type ValidateCreateNewAlbumDataRequestBodyOptions = {
  required?: boolean;
};

/**
 * Validates the request body for adding an existing picture album.
 *
 * @param request - The Express request object.
 * @returns A Joi validation result for the request body.
 */
export default function validateCreateNewAlbumDataRequestBody(
  request: Request,
  options?: ValidateCreateNewAlbumDataRequestBodyOptions
): joi.ValidationResult<AddAlbumDataRequestBody> {
  const schema: joi.ObjectSchema<AddAlbumDataRequestBody> = joi.object({
    title: options?.required ? joi.string() : joi.string().required(),
    description: options?.required ? joi.string() : joi.string().required(),
    is_private: options?.required
      ? joi.boolean()
      : joi.boolean().default(false),
  });

  return schema.validate(request.body);
}
