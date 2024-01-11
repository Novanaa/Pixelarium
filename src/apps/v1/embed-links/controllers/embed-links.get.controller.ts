import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";

export default async function userPictureEmbedLinks(
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
