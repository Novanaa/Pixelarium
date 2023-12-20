import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";
import newHasher from "../../../../utils/hasher";
import { CryptoHasher } from "bun";
import type { TDecodedUser } from "../../auth/interfaces/types/DecodedUserTypes";
import createSecretClientPattern from "../utils/createSecretClientPattern";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { User } from "../../../../../generated/client";
import insertUserClientSecret from "../services/insertUserClientSecret";

export default async function generateSecretKey(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken)
      return Error.unprocessable(res, "The user must be login first!");

    const hasher: CryptoHasher = newHasher("sha256");

    const decoded = req.decoded as TDecodedUser;

    const clientSecretPattern: string = createSecretClientPattern({
      name: decoded.name,
      token: refreshToken,
    });

    const clientSecret: string = hasher
      .update(clientSecretPattern)
      .digest("hex");

    const user: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decoded.providerId,
    });

    if (!user) return Error.badRequest(res, "The request cannot be found");

    await insertUserClientSecret({ userId: user?.id, secret: clientSecret });

    return new SuccessRespones().success(res, "created", "create");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
