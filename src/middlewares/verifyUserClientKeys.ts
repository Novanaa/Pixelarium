import { NextFunction, Request, Response } from "express";
import logger from "../libs/configs/logger";
import client from "../libs/configs/prisma";
import { ClientKey } from "../../generated/client";
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

    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: { client_id, client_secret: client_secret as string },
      });

    if (!userClientKeys)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Your credentials keys is invalid",
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
