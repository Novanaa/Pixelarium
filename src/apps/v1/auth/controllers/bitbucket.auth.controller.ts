import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones } from "../../../../utils/Response";
import { OAuthBitbucketUrl } from "../const/readonly/bitbucketOAuthUrl";

export async function redirectBitbucketLogin(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    return res.redirect(OAuthBitbucketUrl);
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  }
}
