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

    const externalPictureUrl: string = value.image_url as string;

    if (!req.files) {
      const isValidPictureUrl: boolean = validator.isURL(externalPictureUrl);

      if (!isValidPictureUrl)
        return httpBadRequestResponse({
          response: res,
          errorMessage: "The image url must be valid picture url",
        });
    }

    res.send(value);
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
