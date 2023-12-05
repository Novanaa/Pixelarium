import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones, SuccessRespones } from "../../../../utils/Response";

export default async function logout(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken)
      return Error.unauth(res, "The Logout Session was Failed.");

    if (refreshToken) res.clearCookie("refreshToken");

    return new SuccessRespones().success(res, "logout");
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  }
}
