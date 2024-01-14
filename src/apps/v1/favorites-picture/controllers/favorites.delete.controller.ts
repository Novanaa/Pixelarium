import { Response, Request } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { Picture } from "../../../../../generated/client";
import getUserPictureByUniquekey from "../../pictures/services/getUserPictureByUniquekey";
import UserFavoritePictures from "../interfaces/UserFavoritesPictures";
import getUserFavoritesPictures from "../services/getUserFavoritesPictures";
import deleteUserFavoritesPicture from "../services/deletUserFavoritesPicture";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import updateTotalFavoritedPictures from "../services/updateTotalFavoritedPictures";

type DeleteFavoritePictureResponseData = {
  owner: UserWithOptionalChaining;
  deleted_favorite_picture: Picture;
};

export default async function deleteFavoritePicture(
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

    const userFavoritePictures: Awaited<UserFavoritePictures | null> =
      await getUserFavoritesPictures(user.id);

    if (!userFavoritePictures)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const favoritedPicture: Picture = userFavoritePictures.pictures.filter(
      (p) => p.uniquekey == uniquekey
    )[0];

    if (!favoritedPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The picture doesn't exist",
      });

    const totalFavoritedPictures: number = userFavoritePictures.pictures
      .length as number;

    Promise.all([
      deleteUserFavoritesPicture({
        uniquekey: favoritedPicture.uniquekey,
        userId: user.id,
      }),
      updateTotalFavoritedPictures({
        userId: user.id,
        totalFavoritedPictures: totalFavoritedPictures - 1,
      }),
    ]);

    const responseData: DeleteFavoritePictureResponseData = {
      owner: user,
      deleted_favorite_picture: favoritedPicture,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: {
        resultKey: "deleted",
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
