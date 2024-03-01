import { Request } from "express";
import { default as joi } from "joi";
import UserPictureManagementRequestBodyValidationTypes from "./interfaces/types/UserPictureManagementRequestBodyValidationTypes";
import customValidationObject from "./custom";

export default function userPictureManagementRequestBodyValidation(
  req: Request
): joi.ValidationResult<UserPictureManagementRequestBodyValidationTypes> {
  const userPictureManagementValidation = joi.object({
    expiresInDays: joi.number().default(30).allow(null),
    is_private: joi.boolean().default(false),
    use_external_image_url: joi.boolean().default(false),
    picture_details: customValidationObject
      .object({
        title: joi.string().required(),
        description: joi.string().required(),
        image_url: joi.string(),
      })
      .required(),
  });

  return userPictureManagementValidation.validate(req.body);
}