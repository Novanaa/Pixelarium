import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones } from "../../../../utils/Response";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { ClientKey, User } from "../../../../../generated/client";
import findUserClientKeys from "../services/findUserClientKeys";
import sendUserClientKeysResponse from "../utils/sendUserClientKeysResponse";

export default async function getClientSecret(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { name } = req.params;

    const user: Awaited<User | null> = await isUserExistByNameOrEmail({
      field: "name",
      value: name,
    });

    if (!user) return Error.notFound(res);

    if (user) {
      const userClientKeys: Awaited<ClientKey | null> =
        await findUserClientKeys(user.id);

      return sendUserClientKeysResponse({
        response: res,
        clientKeys: userClientKeys,
      });
    }
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
