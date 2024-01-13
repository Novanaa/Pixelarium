import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";

export default async function userFavoritePictures(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    res.send("testttt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
