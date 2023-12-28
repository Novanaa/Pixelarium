import { NextFunction, Request, Response } from "express";
import logger from "../libs/configs/logger";
import client from "../libs/configs/prisma";
import { jwtDecode } from "jwt-decode";
import { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { ClientKey, User } from "../../generated/client";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../utils/responses/httpErrorsResponses";

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
  try {
    const { session } = req.cookies;
    const { client_id, client_secret } = req.query;

    if (!client_id || !client_secret)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "This API Calls Required Client ID or Client Secret",
      });

    if (typeof client_id !== "string" || !client_id.includes("pxlmid"))
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "The Client ID isn't valid!",
      });

    if (!session)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "This operation required a session token!",
      });

    const decoded: TDecodedUser = jwtDecode(session) as TDecodedUser;

    const user: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decoded.providerId,
    });

    if (!user)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The user request cannot be found!",
      });

    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: { user_id: user.id },
      });

    if (!userClientKeys)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "You doesn't have a client keys!",
      });

    if (client_id !== userClientKeys.client_id)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Client ID has invalid signature!",
      });

    if (client_secret !== userClientKeys.client_secret)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Client Secret has invalid signature!",
      });

    return next();
  } catch (err) {
    logger.error(err);
    next();
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
