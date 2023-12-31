import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import getUserGallery, { UserGallery } from "../services/getUserGallery";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

type ResponseData = {
  owner: UserWithOptionalChaining;
  gallery: UserGallery;
  total_gallery_pictures: number;
};

export async function gallery(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({
        field: "name",
        value: name,
      });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.password;
    delete user.email;

    const userGallery: Awaited<UserGallery> = await getUserGallery(user.id);

    const responseData: ResponseData = {
      owner: user,
      gallery: userGallery,
      total_gallery_pictures: userGallery.pictures.length,
    };

    return jsonResult({
      response: res,
      statusCode: http.StatusOk,
      resultKey: "isSuccess",
      dataKey: "data",
      data: responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
