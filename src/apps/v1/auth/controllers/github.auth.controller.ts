import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones } from "../../../../utils/Response";
import { OAuthGithubUrl } from "../const/readonly/githubOAuthUrl";
// import client from "../../../../libs/configs/prisma";

export async function redirectGithubLogin(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    return res.redirect(OAuthGithubUrl);
  } catch (err) {
    logger.error(err);
    Error.badRequest(res);
  }
}
