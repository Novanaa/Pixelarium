import jwt, { JwtPayload } from "jsonwebtoken";
import env from "@/configs/env";
import { DecodedUser } from "@/interfaces/user";

export type VerifyValue = DecodedUser | JwtPayload | string;

/**
 * Verifies a JWT token.
 *
 * @param token - The JWT token to verify.
 * @returns The decoded payload of the JWT token if it is valid, otherwise an error message.
 */
export function verify(token: string): VerifyValue {
  try {
    return jwt.verify(token, env.jwtAccessToken as string);
  } catch (error) {
    const err: Error = error as Error;
    return err.message;
  }
}
