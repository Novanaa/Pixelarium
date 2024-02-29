import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import getUserFavoritesPictures from "../services/getUserFavoritesPictures";
import UserFavoritePictures from "../interfaces/UserFavoritesPictures";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

type userFavoritePicturesResponseData = {
  owner: UserWithOptionalChaining;
  favorites_pictures: UserFavoritePictures;
  total_favorites_pictures: number;
};

export default async function userFavoritePictures(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const favoritePictures: Awaited<UserFavoritePictures | null> =
      await getUserFavoritesPictures(user.id);

    if (!favoritePictures)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: userFavoritePicturesResponseData = {
      owner: user,
      favorites_pictures: favoritePictures,
      total_favorites_pictures: favoritePictures.favorited_pictures,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
