import { Response } from "express";

export interface UserInfoGenerateCredentials {
  accessToken: string;
  refreshToken: string;
}

export interface UserInfoGenerateResponseCookieParam {
  res: Response;
  username: string;
  session: string;
}
