import jwt, { JwtPayload } from "jsonwebtoken";
import env from "@/configs/env";
import { DecodedUser } from "@/interfaces/user";
import { User } from "prisma/generated/client";

export type VerifyValue = DecodedUser | JwtPayload | string;

/**
 * Verifies a JWT token.
 *
 * @param token - The JWT token to verify.
 * @returns The decoded payload of the JWT token if it is valid, otherwise an error message.
 */
export function verify(token: string): VerifyValue {
  try {
    return jwt.verify(token, env.jwtRefreshToken as string);
  } catch (error) {
    const err: Error = error as Error;
    return err.message;
  }
}

export interface GenerateToken {
  accessToken: string;
  refreshToken: string;
}

/**
 * Generates a JWT access token and refresh token based on the provided payload.
 *
 * @param payload - The payload containing the user information.
 * @returns Either an object containing the access token and refresh token, or a string error message.
 */
export function generate(user: User): GenerateToken {
  const payload: DecodedUser = {
    id: user.id,
    avatar: user.avatar,
    bio: user.bio as string,
    email: user.email,
    is_member: user.is_member,
    name: user.name,
    origin_code: user.origin_code,
    type: user.type,
  };

  const refreshToken: string = jwt.sign(
    payload,
    env.jwtRefreshToken as string,
    { expiresIn: "15d" }
  );

  const accessToken: string = jwt.sign(payload, env.jwtAccessToken as string, {
    expiresIn: "30m",
  });

  return { accessToken, refreshToken };
}
