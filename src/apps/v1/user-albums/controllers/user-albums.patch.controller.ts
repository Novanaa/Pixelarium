import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import getUserAlbum from "../services/getUserAlbum";
import client from "../../../../libs/configs/prisma";
import validateRequestIDParams from "../../../../utils/validateRequestIDParams";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import validateCreateNewAlbumDataRequestBody from "../../../../validations/validateAlbumDataRequestBody";
import AddAlbumDataRequestBody from "../../../../validations/interfaces/types/AddAlbumDataRequestBody";
import validateRequestBody from "../../../../utils/validateRequestBody";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import UserAlbums from "../interfaces/UserAlbums";
import updateUserAlbumData from "../services/updateUserAlbumData";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

type UpdateUserAlbumResponseData = {
  owner: UserWithOptionalChaining;
  old_data: UserAlbums;
  updated_data: UserAlbums;
};

export default async function updateUserAlbum(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name, albumId } = req.params;

    const albumIdValidation: void | Response = validateRequestIDParams({
      id: albumId,
      response: res,
      errorMessege: "The album id must be a valid id!",
    });

    if (albumIdValidation) return;

    const emptyRequestBodyValidation: void | Response =
      validateEmptyRequestBody({
        response: res,
        request: req,
        errorMessege: "Cannot find what you want to update",
      });

    if (emptyRequestBodyValidation) return;

    const { error, value }: joi.ValidationResult<AddAlbumDataRequestBody> =
      validateCreateNewAlbumDataRequestBody(req, {
        required: true,
      });

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

    const userAlbum: Awaited<UserAlbums | null> = await getUserAlbum(
      Number(albumId)
    );

    if (!userAlbum)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The album doesn't exist",
      });

    const updatedUserAlbum: Awaited<UserAlbums | null> =
      await updateUserAlbumData({ albumId: userAlbum.id, value });

    if (!updatedUserAlbum)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: UpdateUserAlbumResponseData = {
      owner: user,
      old_data: userAlbum,
      updated_data: updatedUserAlbum,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: { resultKey: "updated" },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
