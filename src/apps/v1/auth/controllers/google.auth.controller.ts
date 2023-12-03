import { Response, Request } from "express";
import { ErrorsRespones } from "../../../../utils/Response";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { OAuth2Client, authUrl } from "../../../../libs/configs/google";
import { google } from "googleapis";
import { CLIENT_FRONTEND_URL } from "../../../../const/env";
import JsonWebToken from "../../../../services/JsonWebToken";

export async function redirectGoogleLogin(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    return res.redirect(authUrl);
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  }
}

export async function loginWithGoogle(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    const { code } = req.query;
    const { tokens } = await OAuth2Client.getToken(code as string);

    if (!tokens) return Error.badRequest(res, "The Login Session Was Failed.");
    if (tokens) OAuth2Client.setCredentials(tokens);
    const oAuth2Config = google.oauth2({ version: "v2", auth: OAuth2Client });

    const { data } = await oAuth2Config.userinfo.get();

    if (!data) return res.redirect(`${CLIENT_FRONTEND_URL}/auth/login`);

    const user = await client.user.findMany({
      where: { email: data.email!, name: data.name! },
    });

    if (!user[0]) {
      await client.user.create({
        data: {
          name: data.name!,
          email: data.email,
          picture: data.picture!,
          type: "User",
          site_admin: false,
          bio: "",
        },
      });
    }

    const { accessToken, refreshToken } = new JsonWebToken().sign({
      name: data.name!,
      email: data.email!,
      picture: data.picture!,
    });

    const isSecured = process.env.NODE_ENV == "production" ? true : false;
    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      secure: isSecured,
      httpOnly: true,
    });

    return res.redirect(
      `${CLIENT_FRONTEND_URL}/auth/login?token=${accessToken}`
    );
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
