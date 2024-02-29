import { NextFunction, Request, Response } from "express";
import client from "../libs/configs/prisma";
import logger from "../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../utils/responses/httpErrorsResponses";
import { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import { jwtDecode } from "jwt-decode";

export default async function verifySessionToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<NextFunction | void | Response> {
  try {
    const { session } = req.cookies;

    if (!session) return httpUnauthorizedResponse({ response: res });

    const decoded: TDecodedUser = req.decoded;

    const decodedSessionToken: TDecodedUser = jwtDecode(session);

    if (decoded.providerId !== decodedSessionToken.providerId)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "Invalid User Session Token!",
      });

    return next();
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
