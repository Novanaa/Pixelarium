import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import { EmbedLinks, Picture } from "../../../../../generated/client";
import getUserPictureByUniquekey from "../services/getUserPictureByUniquekey";
import getPictureEmbedLinks from "../../embed-links/services/getPictureEmbedLinks";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

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
  try {
    res.send("testtttt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
