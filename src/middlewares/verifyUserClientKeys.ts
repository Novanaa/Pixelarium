import { NextFunction, Request, Response } from "express";
import logger from "../libs/configs/logger";
import client from "../libs/configs/prisma";
import { ErrorsRespones } from "../utils/Response";
import { jwtDecode } from "jwt-decode";
import { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { ClientKey, User } from "../../generated/client";

/**
 * Middleware function to verify if a user's client keys are valid.
 *
 * @param req - The incoming request object from the client.
 * @param res - The outgoing response object for communicating with the client.
 * @param next - The next middleware function in the pipeline.
 *
 * @returns A Promise resolving to either the next middleware function, a Response object, or nothing.
 */
export default async function verifyUserClientKeys(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<NextFunction | void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { session } = req.cookies;
    const { client_id, client_secret } = req.query;

    if (!client_id || !client_secret)
      return Error.unauth(
        res,
        "This API Calls Required Client ID or Client Secret"
      );

    if (typeof client_id !== "string" || !client_id.includes("pxlmid"))
      return Error.unprocessable(res, "The Client ID isn't valid!");

    if (!session)
      return Error.unauth(res, "This operation required a session token!");

    const decoded: TDecodedUser = jwtDecode(session) as TDecodedUser;

    const user: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decoded.providerId,
    });

    if (!user) return Error.notFound(res, "The user request cannot be found!");

    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: { user_id: user.id },
      });

    if (!userClientKeys)
      return Error.notFound(res, "You doesn't have a client keys!");

    if (client_id !== userClientKeys.client_id)
      return Error.badRequest(res, "Client ID has invalid signature!");

    if (client_secret !== userClientKeys.client_secret)
      return Error.badRequest(res, "Client Secret has invalid signature!");

    return next();
  } catch (err) {
    logger.error(err);
    next();
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
