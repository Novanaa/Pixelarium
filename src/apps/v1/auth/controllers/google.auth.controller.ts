import { Response, Request } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import { OAuth2Client, authUrl } from "../../../../libs/configs/google";
import { google } from "googleapis";
import { CLIENT_FRONTEND_URL } from "../../../../const/env";
import JsonWebToken from "../../../../services/JsonWebToken";
import defaultUserImage from "../../../../const/readonly/defaultUserProfile";
import generateTokenResponseCookie from "../services/generateTokenResponseCookie";
import createUserIfNotExists from "../services/createUserIfNotExists";
import { User } from "../../../../../generated/client";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";
import slugifyUsername from "../utils/slugifyUsername";

export async function redirectGoogleLogin(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    return res.redirect(authUrl);
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  }
}

export async function loginWithGoogle(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { code } = req.query;
    const { tokens } = await OAuth2Client.getToken(code as string);

    if (!tokens)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The Login Session Was Failed.",
      });
    if (tokens) OAuth2Client.setCredentials(tokens);
    const oAuth2Config = google.oauth2({ version: "v2", auth: OAuth2Client });

    const { data } = await oAuth2Config.userinfo.get();

    if (!data)
      return res.redirect(`${CLIENT_FRONTEND_URL}/auth/login?type=failed`);

    const bigNumber: number = Number(data.id);
    const userId: number = bigNumber / Number(10n ** 13n);
    const slugifiedusername: string = slugifyUsername(data.name!);

    const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: userId,
    });

    if (!isUser) {
      await createUserIfNotExists({
        providerId: userId,
        name: slugifiedusername,
        email: data.email!,
        picture: data.picture! || defaultUserImage,
        bio: "",
      });
    }

    const { accessToken, refreshToken } = new JsonWebToken().sign({
      providerId: Number(isUser?.provider_id) || Number(userId),
      name: slugifiedusername,
      email: data.email!,
      picture: isUser?.picture || data.picture!,
    });

    generateTokenResponseCookie(res, refreshToken, slugifiedusername);

    return res.redirect(
      `${CLIENT_FRONTEND_URL}/auth/login/callback?session=${accessToken}&type=success`
    );
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
