import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";
import getUserByName from "../services/getUserByName";
import UserWithoutPassword from "../interfaces/types/UserWithoutPasswordTypes";

export default async function singleUser(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { name } = req.params;

    const user: Awaited<UserWithoutPassword | null> = await getUserByName(name);

    if (!user) return Error.notFound(res);

    return new SuccessRespones().sendSuccessSingleData(res, "user", user);
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
