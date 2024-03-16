import env from "@/configs/env";
import jwt from "jsonwebtoken";
import { User } from "prisma/generated/client";

export interface MockJsonWebToken {
  accessToken: string;
  refreshToken: string;
}

/**
 * Generates a JSON Web Token (JWT) for the given user.
 *
 * @param user - The user object to generate the token for.
 * @returns An object containing the access token and refresh token.
 */
export default function mockJsonWebToken(user: User): MockJsonWebToken {
  const refreshToken: string = jwt.sign(user, env.jwtRefreshToken as string, {
    expiresIn: "15d",
  });
  const accessToken: string = jwt.sign(user, env.jwtAccessToken as string, {
    expiresIn: "30m",
  });

  return { accessToken, refreshToken };
}
