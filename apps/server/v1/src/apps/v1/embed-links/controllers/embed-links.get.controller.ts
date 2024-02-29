import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getUserPictureByUniquekey from "../../pictures/services/getUserPictureByUniquekey";
import {
  EmbedLinks,
  Picture,
} from "../../../../../packages/prisma/generated/client";
import validatePictureUniquekey from "../../../../utils/validatePictureUniquekey";
import getPictureEmbedLinks from "../services/getPictureEmbedLinks";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";

type UserPictureEmbedLinksResponseData = {
  owner: UserWithOptionalChaining;
  picture_data: Picture;
  embed_pictures_links: EmbedLinks;
};

export default async function userPictureEmbedLinks(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name, uniquekey } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const pictureUniquekeyValidation: void | Response =
      validatePictureUniquekey({ uniquekey, response: res });

    if (pictureUniquekeyValidation) return;

    const picture: Awaited<Picture | null> =
      await getUserPictureByUniquekey(uniquekey);

    if (!picture)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The picture doesn't exist",
      });

    const embedLinks: Awaited<EmbedLinks | null> = await getPictureEmbedLinks(
      picture.id
    );

    if (!embedLinks)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: UserPictureEmbedLinksResponseData = {
      owner: user,
      picture_data: picture,
      embed_pictures_links: embedLinks,
    };

    return jsonResult<UserPictureEmbedLinksResponseData>({
      response: res,
      data: responseData,
      dataKey: "data",
      resultKey: "isSuccess",
      statusCode: http.StatusOk,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
