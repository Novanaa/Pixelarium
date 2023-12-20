import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";
import { TDecodedUser } from "../../auth/interfaces/types/DecodedUserTypes";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { ClientKey, User } from "../../../../../generated/client";
import deleteUserClientSecret from "../services/deleteUserClientSecret";
import findUserClientKeys from "../services/findUserClientKeys";

export default async function removeClientKey(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { session } = req.cookies;

    if (!session) return Error.unauth(res, "You must be login first!");

    const decode = req.decoded as TDecodedUser;

    const user: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decode.providerId,
    });

    if (!user) return Error.notFound(res, "Your request doesn't be found");

    const userClientKeys: Awaited<ClientKey | null> = await findUserClientKeys(
      user.id
    );

    if (!userClientKeys?.client_secret)
      return Error.unprocessable(res, "The User Client Secret Ins't Exist.");

    if (user && userClientKeys?.client_secret) {
      await deleteUserClientSecret(user.id);
    }

    return new SuccessRespones().success(res, "deleted");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
