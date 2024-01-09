import { Request } from "express";
import { default as joi } from "joi";

export type UpdateUserRequestBodySchemaValidation = {
  title: string;
  description: string;
  isFavorited: boolean;
  isPrivate: boolean;
  use_external_image_url: boolean;
  image_url: string;
  expiresInDays: number;
};

/**
 * Validates the request body for updating a user.
 *
 * @param {Request} request - The Express request object.
 * @returns {joi.ValidationResult<UpdateUserRequestBodySchemaValidation>} The validation result of the request body.
 */
export default function validateUpdateUserRequestBody(
  request: Request
): joi.ValidationResult<UpdateUserRequestBodySchemaValidation> {
  const updateUserRequestBodySchema: joi.ObjectSchema<UpdateUserRequestBodySchemaValidation> =
    joi.object({
      title: joi.string(),
      description: joi.string(),
      expiresInDays: joi.number(),
      image_url: joi.string(),
      isFavorited: joi.boolean(),
      isPrivate: joi.boolean(),
    });

  return updateUserRequestBodySchema.validate(request.body);
}
