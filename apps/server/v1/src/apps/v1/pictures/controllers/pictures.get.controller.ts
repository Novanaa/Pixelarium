import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import {
  EmbedLinks,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import getUserPictureByUniquekey from "../services/getUserPictureByUniquekey";
import getPictureEmbedLinks from "../../embed-links/services/getPictureEmbedLinks";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import FilesSystem from "../../../../services/FilesSystem";
import getPublicDirectoryPicturepath from "../../../../utils/getPublicDirectoryPicturepath";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import slugify from "slugify";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import http from "../../../../const/readonly/httpStatusCode";

type SingleUserPictureResponseData = {
  picture: Picture;
  embed_pictures_links: EmbedLinks;
};

export async function singleUserPicture(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { uniquekey } = req.params;

    const pictureUniquekeyValidation: void | Response =
      validatePictureUniquekey({
        uniquekey,
        response: res,
      });

    if (pictureUniquekeyValidation) return;

    const userPicture: Awaited<Picture | null> =
      await getUserPictureByUniquekey(uniquekey);

    if (!userPicture) return httpNotFoundResponse({ response: res });

    const pictureEmbedLinks: Awaited<EmbedLinks | null> =
      await getPictureEmbedLinks(userPicture.id);

    if (!pictureEmbedLinks)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: SingleUserPictureResponseData = {
      embed_pictures_links: pictureEmbedLinks,
      picture: userPicture,
    };

    return sendJsonResultHttpResponse<SingleUserPictureResponseData>({
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

export async function downloadUserPicture(
  req: Request,
  res: Response
): Promise<Response | void> {
  const fs: FilesSystem = new FilesSystem();
  try {
    const { name, uniquekey } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    const slugifiedUsername: string = slugify(user.name, {
      lower: true,
    });

    const pictureUniquekeyValidation: void | Response =
      validatePictureUniquekey({
        uniquekey,
        response: res,
      });

    if (pictureUniquekeyValidation) return;

    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user.id
    );

    if (!userGallery)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const userPicture: Picture = userGallery.pictures.filter(
      (p) => p.uniquekey == uniquekey
    )[0];

    if (!userPicture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The picture doesn't exist",
      });

    const filename: string = userPicture.filename;

    const userPicturePath: string = getPublicDirectoryPicturepath({
      usage: "galleries",
      filename,
      name: slugifiedUsername,
    });

    const isFileExist: boolean | null = fs.isExist(userPicturePath);

    if (!isFileExist)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    res.status(http.StatusOk).download(userPicturePath);
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
