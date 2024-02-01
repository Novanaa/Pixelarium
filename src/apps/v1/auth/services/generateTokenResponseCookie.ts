import { Response } from "express";
import cookiesOptions from "../const/readonly/cookiesOptions";

export default function generateTokenResponseCookie(
  res: Response,
  refreshToken: string
) {
  const sessionTokenCookiesMaxAge: number = 24 * 60 * 60 * 1000;

  res.cookie("session", refreshToken, {
    ...cookiesOptions,
    maxAge: sessionTokenCookiesMaxAge,
  });

  res.cookie("logged_in", true, cookiesOptions);
}
