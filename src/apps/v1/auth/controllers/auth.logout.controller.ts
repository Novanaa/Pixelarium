import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";

export default async function logout(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    const { session } = req.cookies;

    if (!session) return Error.unauth(res, "The Logout Session was Failed.");

    if (session) res.clearCookie("session");

    return new SuccessRespones().success(res, "logout");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  }
}
