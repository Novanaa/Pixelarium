/* eslint-disable no-console */

import { test, expect, describe } from "bun:test";
import { generate, GenerateToken, verify, VerifyValue } from "../jsonwebtoken";
import jwt from "jsonwebtoken";
import env from "@/configs/env";
import { User } from "prisma/generated/client";
import prisma from "@/libs/prisma";
import { DecodedUser } from "@/interfaces/user";
import userPayload from "@/test/user-payload";

describe("Verify - Json Web Token Utilities", () => {
  test("should be return a string when the token is invalid", () => {
    const verifyToken: VerifyValue = verify("test");

    console.log(verifyToken);
    expect(verifyToken).toBeString();
    expect(verifyToken).toBe("jwt malformed");
  });
  test("should be return a string when the token is expires", () => {
    const token: string = jwt.sign(
      { test: "heheh" },
      env.jwtRefreshToken as string,
      {
        expiresIn: -1,
      }
    );
    const verifyToken: VerifyValue = verify(token);

    console.log(verifyToken);
    expect(verifyToken).toBe("jwt expired");
    expect(verifyToken).toBeString();
  });
  test("should be return a decoded user data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const verifyToken: VerifyValue = verify(refreshToken);

    console.log(verifyToken);
    expect(verifyToken).toBeDefined();
    expect(verifyToken).not.toBeUndefined();
  });
  test("user decoded data should be match to requested user data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const verifyToken: VerifyValue = verify(refreshToken);
    const decodedUserPayload: DecodedUser = userPayload(user as User);
    const verifyTokenUserDecodedPayload: DecodedUser = userPayload(
      verifyToken as User
    );

    console.log(verifyToken);
    expect(JSON.stringify(verifyTokenUserDecodedPayload)).toEqual(
      JSON.stringify(decodedUserPayload)
    );
  });
});

describe("Generate - Json Web Token Utilities", () => {
  test("should be return access token", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { accessToken } = generate(user as User);

    console.log(accessToken);
    expect(accessToken).toBeDefined();
    expect(accessToken).not.toBeUndefined();
  });
  test("should be return refresh token", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken } = generate(user as User);

    console.log(refreshToken);
    expect(refreshToken).toBeDefined();
    expect(refreshToken).not.toBeUndefined();
  });
  test("refresh token should be string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken } = generate(user as User);

    console.log(refreshToken);
    expect(refreshToken).toBeString();
  });
  test("access token should be string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { accessToken } = generate(user as User);

    console.log(accessToken);
    expect(accessToken).toBeString();
  });
});
