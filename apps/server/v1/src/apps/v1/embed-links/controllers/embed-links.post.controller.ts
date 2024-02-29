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
import {
  EmbedLinks,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import getUserPictureByUniquekey from "../../pictures/services/getUserPictureByUniquekey";
import PictureEmbedLinks from "../interfaces/PictureEmbedLinks";
import generatePictureEmbedLinksData from "../services/generatePictureEmbedLinksData";
import generateDirectViewLinkPicture from "../services/generateDirectViewLinkPicture";
import addPictureEmbedLinks from "../services/addPictureEmbedLinks";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";
import http from "../../../../const/readonly/httpStatusCode";

type AddEmbedLinksPictureResponseData = {
  owner: UserWithOptionalChaining;
  inserted_data: EmbedLinks;
};
export default async function addEmbedLinksPicture(
  req: Request,
  res: Response
): Promise<void | Response> {
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

    if (userPicture.is_private)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The picture must be a public picture",
      });

    const directViewLink: string = generateDirectViewLinkPicture(uniquekey);

    const pictureEmbedLinks: PictureEmbedLinks = generatePictureEmbedLinksData({
      title: userPicture.title,
      url: userPicture.url,
      directViewLink,
      options: { imageHeight: 100, imageWidth: 100 },
    });

    const embedLinks: Awaited<EmbedLinks> = await addPictureEmbedLinks({
      userPicture,
      pictureEmbedLinks,
    });

    const responseData: AddEmbedLinksPictureResponseData = {
      inserted_data: embedLinks,
      owner: user,
    };

    return sendJsonResultHttpResponse({
      response: res,
      responseData,
      options: {
        statusCode: http.StatusCreated,
      },
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
