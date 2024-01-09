import validator from "validator";
import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import validateUpdateUserRequestBody, {
  UpdateUserRequestBodySchemaValidation,
} from "../../../../validations/validateUpdateUserPictureRequestBody";
import validateRequestBody from "../../../../utils/validateRequestBody";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import { Picture } from "../../../../../generated/client";

export default async function updateUserPicture(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name, uniquekey } = req.params;

    const validateUniquekey: void | Response = validatePictureUniquekey({
      uniquekey,
      response: res,
    });

    if (validateUniquekey) return;

    const {
      value,
      error,
    }: joi.ValidationResult<UpdateUserRequestBodySchemaValidation> =
      validateUpdateUserRequestBody(req);

    const requestBodyValidation: void | Response = validateRequestBody({
      res,
      error,
    });

    if (requestBodyValidation) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const userGallery: Awaited<UserGallery> = await getUserGallery(user.id);

    if (!userGallery.pictures.length)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Your gallery pictures was empty!",
      });

    const userGalleryPicture: Picture = userGallery.pictures.filter(
      (p) => p.uniquekey == uniquekey
    )[0];

    if (!userGalleryPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The gallery picture doesn't exist",
      });

    const externalPictureUrl: string = value.image_url as string;

    if (!req.files) {
      const isValidPictureUrl: boolean = validator.isURL(externalPictureUrl);

      if (!isValidPictureUrl)
        return httpBadRequestResponse({
          response: res,
          errorMessage: "The image url must be valid picture url",
        });
    }

    res.send(userGalleryPicture);
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
