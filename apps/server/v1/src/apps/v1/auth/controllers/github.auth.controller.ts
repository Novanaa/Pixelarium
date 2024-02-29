import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  OAuthGithubUrl,
  OAuthGithubAccessTokenUrl,
} from "../const/readonly/githubOAuthUrl";
import useFetch from "../../../../utils/useFetch";
import type TGithubAccessToken from "../interfaces/types/GithubAccessTokenTypes";
import type TGithubUser from "../interfaces/types/GithubUserTypes";
import client from "../../../../libs/configs/prisma";
import JsonWebToken from "../../../../services/JsonWebToken";
import { CLIENT_FRONTEND_URL } from "../../../../const/env";
import defaultUserImage from "../../../../const/readonly/defaultUserProfile";
import generateTokenResponseCookie from "../services/generateTokenResponseCookie";
import createUserIfNotExists from "../services/createUserIfNotExists";
import { User } from "../../../../../packages/prisma/generated/client";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";
import slugifyUsername from "../utils/slugifyUsername";

export async function redirectGithubLogin(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    return res.redirect(OAuthGithubUrl);
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  }
}

export async function loginWithGithub(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { code } = req.query;

    const githubAccessToken: Awaited<TGithubAccessToken | null> =
      await useFetch<TGithubAccessToken>({
        method: "POST",
        url: `${OAuthGithubAccessTokenUrl}&code=${code}`,
      });

    const { access_token, token_type } =
      githubAccessToken as TGithubAccessToken;

    const auth: string = `${token_type} ${access_token}`;
    const user: Awaited<TGithubUser | null> = await useFetch<TGithubUser>({
      url: "https://api.github.com/user",
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });

    if (!user)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The Login Session Was Failed.",
      });

    const userId: number = Number(user.id);
    const slugifiedusername: string = slugifyUsername(user.login);
    const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
      value: userId,
      field: "provider_id",
    });

    if (!isUser) {
      await createUserIfNotExists({
        providerId: userId,
        name: slugifiedusername,
        email: user.email || null,
        picture: user.avatar_url || defaultUserImage,
        bio: user.bio,
      });
    }

    const { accessToken, refreshToken } = new JsonWebToken().sign({
      providerId: Number(isUser?.provider_id) || Number(userId),
      name: slugifiedusername,
      email: user.email!,
      picture: isUser?.picture || user.avatar_url,
    });

    generateTokenResponseCookie(res, refreshToken, slugifiedusername);

    return res.redirect(
      `${CLIENT_FRONTEND_URL}/auth/login/callback?session=${accessToken}&type=success`
    );
  } catch (err) {
    if (err) throw err;
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
