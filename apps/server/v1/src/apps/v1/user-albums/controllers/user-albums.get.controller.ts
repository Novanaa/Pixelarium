import { Response, Request } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getUserAlbums from "../services/getUserAlbums";
import { Album } from "../../../../../packages/prisma/generated/client";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import validateRequestIDParams from "../../../../utils/validateRequestIDParams";
import UserAlbums from "../interfaces/UserAlbums";
import getUserAlbum from "../services/getUserAlbum";

type UserAlbumsResponseData = {
  owner: UserWithOptionalChaining;
  user_albums: Array<Album>;
  total_user_albums: number;
};

export async function userAlbums(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const userAlbumsList: Awaited<Array<Album>> = await getUserAlbums(user.id);

    const responseData: UserAlbumsResponseData = {
      owner: user,
      user_albums: userAlbumsList,
      total_user_albums: userAlbumsList.length,
    };

    return sendJsonResultHttpResponse({ response: res, responseData });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}

type SingleUserAlbumResponseData = {
  owner: UserWithOptionalChaining;
  user_album: UserAlbums;
};

export async function singleUserAlbum(
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
        errorMessage: "The album is doesn't exist",
      });

    const responseData: SingleUserAlbumResponseData = {
      owner: user,
      user_album: userAlbum,
    };

    return sendJsonResultHttpResponse({ response: res, responseData });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
