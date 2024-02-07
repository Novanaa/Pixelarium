import { Response } from "express";
import cookiesOptions from "../const/readonly/cookiesOptions";

export default function generateTokenResponseCookie(
  res: Response,
  refreshToken: string,
  name: string
) {
  const sessionTokenCookiesMaxAge: number = 15 * 24 * 60 * 60 * 1000;

  res.cookie("session", refreshToken, {
    ...cookiesOptions,
    maxAge: sessionTokenCookiesMaxAge,
  });

  res.cookie("logged_in", "yes", {
    ...cookiesOptions,
    maxAge: sessionTokenCookiesMaxAge,
  });
  res.cookie("logged_as", name, {
    ...cookiesOptions,
    maxAge: sessionTokenCookiesMaxAge,
  });
}
