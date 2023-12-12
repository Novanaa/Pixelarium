import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from "../const/env";

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
  public sign(payload: {
    providerId: number;
    name: string;
    email: string;
    picture: string;
  }): {
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
}
