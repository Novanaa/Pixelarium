import slugify from "slugify";
import { default as joi } from "joi";
import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import validateRequestIDParams from "../../../../utils/validateRequestIDParams";
import UserAlbums from "../interfaces/UserAlbums";
import getUserAlbum from "../services/getUserAlbum";
import { Album, Picture } from "../../../../../generated/client";
import getUserPictureByUniquekey from "../../pictures/services/getUserPictureByUniquekey";
import insertExistingPictureAlbum from "../services/insertExistingPictureAlbum";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import validateEmptyRequestBody from "../../../../utils/validateEmptyRequestBody";
import validateCreateNewAlbumDataRequestBody from "../../../../validations/validateAlbumDataRequestBody";
import AddAlbumDataRequestBody from "../../../../validations/interfaces/types/AddAlbumDataRequestBody";
import validateRequestBody from "../../../../utils/validateRequestBody";
import FilesSystem from "../../../../services/FilesSystem";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import createNewUserAlbum from "../services/createNewUserAlbum";
import http from "../../../../const/readonly/httpStatusCode";
import checkIfUserAlbumsIsAlreadyExist from "../services/checkIfUserAlbumsIsAlreadyExist";
import getUserAlbums from "../services/getUserAlbums";

type AddAlbumPictureResponseData = {
  owner: UserWithOptionalChaining;
  album_data: Album;
  inserted_picture: Picture;
};

export async function addAlbumPicture(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name, albumId, uniquekey } = req.params;

    const uniquekeyValidation: void | Response = validatePictureUniquekey({
      uniquekey,
      response: res,
    });

    if (uniquekeyValidation) return;

    const albumIdValidation: void | Response = validateRequestIDParams({
      id: albumId,
      response: res,
      errorMessege: "The album ID must be valid!",
    });

    if (albumIdValidation) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const [userAlbum, userPicture] = await Promise.all([
      getUserAlbum(Number(albumId)) as Promise<UserAlbums | null>,
      getUserPictureByUniquekey(uniquekey) as Promise<Picture | null>,
    ]);

    if (!userAlbum)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The user album doesn't exist",
      });

    if (!userPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The picture doesn't exist",
      });

    const albumThumbnail: string = !userAlbum.pictures.length
      ? userPicture.url
      : (userAlbum.thumbnail as string);

    await insertExistingPictureAlbum({
      albumId: userAlbum.id,
      pictureId: userPicture.id,
      thumbnail: albumThumbnail,
    });

    const responseData: AddAlbumPictureResponseData = {
      owner: user,
      album_data: userAlbum,
      inserted_picture: userPicture,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: {
        resultKey: "inserted",
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}

type AddUserAlbumResponseData = {
  owner: UserWithOptionalChaining;
  inserted_data: UserAlbums;
};

export async function addUserAlbum(
  req: Request,
  res: Response
): Promise<void | Response> {
  const fs: FilesSystem = new FilesSystem();
  try {
    const { name } = req.params;

    const emptyRequestBodyValidation: void | Response =
      validateEmptyRequestBody({ request: req, response: res });

    if (emptyRequestBodyValidation) return;

    const { error, value }: joi.ValidationResult<AddAlbumDataRequestBody> =
      validateCreateNewAlbumDataRequestBody(req);

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

    const albumName: string = slugify(value.title) as string;

    const [userAlbums, isUserAlbumAlreadyExist] = await Promise.all([
      getUserAlbums(user.id) as Promise<Array<Album>>,
      checkIfUserAlbumsIsAlreadyExist(albumName) as Promise<boolean>,
    ]);

    const slugifiedAlbumName: string = isUserAlbumAlreadyExist
      ? albumName + `-${userAlbums.length}`
      : albumName;

    const generatedAlbumDirpath: string = getPublicDirectoryPicturepath({
      usage: "albums",
      filename: "",
      albumName: slugifiedAlbumName,
      name,
    });

    const createdUserAlbum: Awaited<Album> = await createNewUserAlbum({
      userId: user.id,
      value: { ...value, title: slugifiedAlbumName },
    });

    fs.makeDirectory(generatedAlbumDirpath);

    const userAlbum: Awaited<UserAlbums | null> = await getUserAlbum(
      createdUserAlbum.id
    );

    if (!userAlbum)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: AddUserAlbumResponseData = {
      owner: user,
      inserted_data: userAlbum,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: { resultKey: "created", statusCode: http.StatusCreated },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
