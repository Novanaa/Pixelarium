import { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import logger from "../libs/configs/logger";
import JsonWebToken from "../services/JsonWebToken";
import type { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import {
  httpBadRequestResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../utils/responses/httpErrorsResponses";

export default function jsonWebTokenAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const jwt = new JsonWebToken();
  try {
    const { authorization } = req.headers;
    const token: string | undefined =
      authorization && authorization.split(" ")[1];

    if (!token)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "This opearation required a token!",
      });

    const decoded: string | JwtPayload | null = jwt.verify(
      token
    ) as TDecodedUser;

    if (!decoded)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "Invalid Signature!",
      });

    if (decoded.exp) {
      const expirationTimestamp: number | undefined = decoded.exp;
      const currentTimestamp = Math.floor(Date.now() / 1000);

      if (expirationTimestamp! < currentTimestamp)
        return httpUnauthorizedResponse({
          response: res,
          errorMessage: "The Token has been expired",
        });
    }

    req.decoded = decoded;

    return next();
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  }
}
