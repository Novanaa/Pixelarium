import { Request, Response, NextFunction } from "express";
import logger from "../libs/configs/logger";
import { ErrorsRespones } from "../utils/Response";
import JsonWebToken from "../services/JsonWebToken";
import type { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import { JwtPayload } from "jsonwebtoken";

export default function jsonWebTokenAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const Error = new ErrorsRespones();
  const jwt = new JsonWebToken();
  try {
    const { authorization } = req.headers;
    const token: string | undefined =
      authorization && authorization.split(" ")[1];

    if (!token) return Error.unauth(res, "This opearation required a token!");

    const decoded: string | JwtPayload | null = jwt.verify(
      token
    ) as TDecodedUser;

    if (!decoded) return Error.unprocessable(res, "Invalid Signature!");

    if (decoded.exp) {
      const expirationTimestamp: number | undefined = decoded.exp;
      const currentTimestamp = Math.floor(Date.now() / 1000);

      if (expirationTimestamp! < currentTimestamp)
        return Error.unauth(res, "The Token has been expired");
    }

    req.decoded = decoded;

    return next();
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  }
}
