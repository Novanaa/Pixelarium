import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";

export default async function updateUserPaymentHistory(
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
