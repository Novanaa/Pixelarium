import { Response } from "express";
import { NODE_ENV } from "../../../../const/env";

export default function generateTokenResponseCookie(
  res: Response,
  refreshToken: string
) {
  const isSecured = NODE_ENV == "production" ? true : false;
  res.cookie("refreshToken", refreshToken, {
    maxAge: 24 * 60 * 60 * 1000,
    secure: isSecured,
    httpOnly: true,
    sameSite: "strict",
  });
}
