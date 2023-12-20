import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones } from "../../../../utils/Response";

export default async function removeClientKey(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    res.send("test");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
