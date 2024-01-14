import { Response, Request } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { Favorite, Picture } from "../../../../../generated/client";
import getUserPictureByUniquekey from "../../pictures/services/getUserPictureByUniquekey";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import UserFavoritePictures from "../interfaces/UserFavoritesPictures";
import getUserFavoritesPictures from "../services/getUserFavoritesPictures";
import insertFavoritesPicture from "../services/insertFavoritesPicture";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import http from "../../../../const/readonly/httpStatusCode";

type AddFavoritePictureByNameResponseData = {
  owner: UserWithOptionalChaining;
  inserted_favorites_data_picture: Picture;
  total_inserted_pictures: number;
};

export default async function addFavoritePictureByName(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name, uniquekey } = req.params;

    const pictureUniquekeyValidation: void | Response =
      validatePictureUniquekey({ uniquekey, response: res });

    if (pictureUniquekeyValidation) return;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const userPicture: Awaited<Picture | null> =
      await getUserPictureByUniquekey(uniquekey);

    if (!userPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The picture doesn't exist",
      });

    const userFavoritePicture: Awaited<UserFavoritePictures | null> =
      await getUserFavoritesPictures(user.id);

    if (!userFavoritePicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const totalFavoritedPictures: number = userFavoritePicture.pictures
      .length as number;

    const insertedFavoritesPicture: Awaited<Favorite> =
      await insertFavoritesPicture({
        userId: user.id,
        userPictureId: userPicture.id,
        totalFavorited: totalFavoritedPictures,
      });

    const responseData: AddFavoritePictureByNameResponseData = {
      owner: user,
      inserted_favorites_data_picture: userPicture,
      total_inserted_pictures: insertedFavoritesPicture.favorited_pictures,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: {
        statusCode: http.StatusCreated,
        resultKey: "created",
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
