import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import { ErrorsRespones } from "../../../../utils/Response";
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
import isUserExists from "../services/isUserExist";
import createUserIfNotExists from "../services/createUserIfNotExists";
import { User } from "../../../../../generated/client";

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

export async function loginWithGithub(
  req: Request,
  res: Response
): Promise<void | Response> {
  const Error = new ErrorsRespones();
  try {
    const { code } = req.query;

    const githubAccessToken: Awaited<TGithubAccessToken> | null =
      await useFetch<TGithubAccessToken>(
        `${OAuthGithubAccessTokenUrl}&code=${code}`,
        "POST"
      );

    const { access_token, token_type } =
      githubAccessToken as TGithubAccessToken;

    const auth: string = `${token_type} ${access_token}`;
    const user: Awaited<TGithubUser> | null = await useFetch<TGithubUser>(
      "https://api.github.com/user",
      "GET",
      auth
    );

    if (!user) return Error.badRequest(res, "The Login Session Was Failed.");

    const userId: bigint = BigInt(String(user.id));
    const isUser: Awaited<User | null> = await isUserExists({
      providerId: userId,
    });

    if (!isUser) {
      await createUserIfNotExists({
        providerId: userId,
        name: user.login! || user.name!,
        email: user.email || null,
        picture: user.avatar_url || defaultUserImage,
        bio: user.bio,
      });
    }

    const { accessToken, refreshToken } = new JsonWebToken().sign({
      providerId: Number(isUser?.provider_id) || Number(userId),
      name: isUser?.name || user.login,
      email: isUser?.email || user.email!,
      picture: isUser?.picture || user.avatar_url,
    });

    generateTokenResponseCookie(res, refreshToken);

    return res.redirect(
      `${CLIENT_FRONTEND_URL}/auth/login/success?token=${accessToken}&type=success`
    );
  } catch (err) {
    logger.error(err);
    Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
