import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from "../const/env";

export default class JsonWebToken {
  sign(payload: { name: string; email: string; picture: string }): {
    accessToken: string;
    refreshToken: string;
  } {
    const accessToken: string = jwt.sign(payload, JWT_ACCESS_TOKEN as string, {
      expiresIn: "120s",
    });

    const refreshToken: string = jwt.sign(
      payload,
      JWT_REFRESH_TOKEN as string,
      {
        expiresIn: "1d",
      }
    );

    return { accessToken, refreshToken };
  }
}
