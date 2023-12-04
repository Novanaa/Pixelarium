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

    const isUser = await client.user.findMany({
      where: { name: user?.login || user?.name },
    });

    if (!isUser[0]) {
      await client.user.create({
        data: {
          name: user.login! || user.name!,
          email: user.email || null,
          picture: user.avatar_url || defaultUserImage,
          type: "User",
          site_admin: false,
          bio: user.bio,
        },
      });
    }

    const { accessToken, refreshToken } = new JsonWebToken().sign({
      name: user.name! || user.login,
      email: user.email! || "",
      picture: user.avatar_url!,
    });

    const isSecured = process.env.NODE_ENV == "production" ? true : false;
    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      secure: isSecured,
      httpOnly: true,
    });

    return res.redirect(
      `${CLIENT_FRONTEND_URL}/auth/login/success?token=${accessToken}&type=success`
    );
  } catch (err) {
    logger.error(err);
    Error.badRequest(res);
  }
}
