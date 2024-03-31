import { Environment } from "@/configs/readonly";
import { Injectable } from "@nestjs/common";
import { SignOptions } from "jsonwebtoken";
import { CookieOptions } from "express";

@Injectable()
export class AuthConstant {
  static readonly GOOGLE_AUTH_SCOPES: Array<string> = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/plus.me",
  ];

  static readonly COOKIE_OPTIONS: CookieOptions = {
    secure: Environment.NODEENV == "production" ? true : false,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  };

  static readonly USER_CREDENTIALS_OPTIONS: SignOptions =
    {} satisfies SignOptions;

  static readonly ACCESS_TOKEN_EXPIRES: string = "1800s";

  static readonly REFRESH_TOKEN_EXPIRES: string = "15d";

  static readonly GITHUB_OAUTH_URL: string = "https://github.com/login/oauth";
}
