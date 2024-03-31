import { Environment } from "@/configs/readonly";
import { Injectable } from "@nestjs/common";
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
  };
}
