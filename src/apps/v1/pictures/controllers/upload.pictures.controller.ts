import Joi from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import userPictureManagementRequestBodyValidation from "../../../../validations/userPictureManagementRequestBodyValidation";
import UserPictureManagementRequestBodyValidationTypes from "../../../../validations/interfaces/types/UserPictureManagementRequestBodyValidationTypes";
import validateRequestBody from "../../../../utils/validateRequestBody";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import validateRequestFilesField from "../../../../utils/validateRequestFilesField";
import requestFileFieldName from "../../../../const/readonly/requestFileFieldName";

export default async function addUserGalleryPicture(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name } = req.params;
    let pictureUrl: string = "";

    const {
      error,
      value,
    }: Joi.ValidationResult<UserPictureManagementRequestBodyValidationTypes> =
      userPictureManagementRequestBodyValidation(req);

    const validateRequestBodyResult: void | Response = validateRequestBody({
      res,
      value,
      error,
      usage: "upload",
    });
    if (validateRequestBodyResult) return;

    if (!name)
      return httpBadRequestResponse({
        response: res,
        errorMessage:
          "Query Params Name Should be Provided, example => /v1/plxm/pictures/<your-pixelarium-username>/upload",
      });

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user.id
    );

    if (value.use_external_image_url && !value.picture_details.image)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage:
          "The image field must be filled if the use_external_image_url is setted to true",
      });

    if (value.use_external_image_url)
      pictureUrl = value.picture_details.image as string;

    if (req.files) {
      const requestFilesFieldValidation: void | Response =
        validateRequestFilesField({
          response: res,
          request: req,
          field: requestFileFieldName,
        });

      if (requestFilesFieldValidation) return;
    }

    console.log(pictureUrl);

    return res.send(userGallery);
  } catch (err) {
    // if (err) throw err;
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
