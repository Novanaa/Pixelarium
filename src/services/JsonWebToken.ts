import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from "../const/env";
import logger from "../libs/configs/logger";
import type TJwtUserPayload from "../interfaces/types/JwtUserPayloadTypes";

/* The JsonWebToken class provides a method to sign a payload and generate an access token and a
refresh token. */
export default class JsonWebToken {
  /**
   * The `sign` function generates an access token and a refresh token using the provided payload and
   * returns them as an object.
   * @param payload - An object containing the following properties:
   * @returns an object with two properties: accessToken and refreshToken. The values of these
   * properties are strings.
   */
  public sign(payload: TJwtUserPayload): {
    accessToken: string;
    refreshToken: string;
  } {
    const accessToken: string = jwt.sign(payload, JWT_ACCESS_TOKEN as string, {
      expiresIn: "1800s",
    });

    const refreshToken: string = jwt.sign(
      payload,
      JWT_REFRESH_TOKEN as string,
      {
        expiresIn: "15d",
      }
    );

    return { accessToken, refreshToken };
  }

  public verify(token: string): string | JwtPayload | null {
    try {
      if (!token) throw new Error("Undefined Function Params: token");

      const decoded: string | JwtPayload = jwt.verify(
        token,
        JWT_ACCESS_TOKEN as string,
        {
          algorithms: ["HS256"],
        }
      );

      return decoded;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
}
