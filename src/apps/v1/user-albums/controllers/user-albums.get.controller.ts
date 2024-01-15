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
import { Album } from "../../../../../generated/client";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

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

export async function singleUserAlbum(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    res.send("testttttttt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
