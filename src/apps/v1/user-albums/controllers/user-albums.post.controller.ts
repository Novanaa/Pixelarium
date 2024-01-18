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

export async function addUserAlbum(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    res.send("testtt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
