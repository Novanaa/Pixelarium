/* eslint-disable no-console */

import { describe, test, expect } from "bun:test";
import app from "@/main";
import supertest from "supertest";
import http from "@/constant/code";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import defaultErrorMessege from "@/constant/default-error-messege";
import env from "@/configs/env";
import jwt from "jsonwebtoken";
import { TokenizerResponseData } from "../controllers/tokenizer";
import { User } from "prisma/generated/client";
import prisma from "@/libs/prisma";
import { GenerateToken, generate, verify } from "@/utils/jsonwebtoken";

describe("User Session Tokenizer", () => {
  test("should be return 401 status code if the cookies is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).get("/auth/tokenizer");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(body.status).toBe("KO");
    expect(request.status).toBe(http.StatusUnauthorized);
    expect(body.code).toBe(http.StatusUnauthorized);
    expect(body.messege).toBe(defaultErrorMessege.unauth);
  });
  test("should be return 401 status code if the user session cookies is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", "test=123");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(body.status).toBe("KO");
    expect(request.status).toBe(http.StatusUnauthorized);
    expect(body.code).toBe(http.StatusUnauthorized);
    expect(body.messege).toBe(defaultErrorMessege.unauth);
  });
  test("should be return 403 status code if the user session cookies is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", "session=123");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(body.status).toBe("KO");
    expect(request.status).toBe(http.StatusForbidden);
    expect(body.code).toBe(http.StatusForbidden);
    expect(body.messege).toBe(defaultErrorMessege.forbidden);
  });
  test("should be return 403 status code if the user session cookies is expired", async () => {
    const token: string = jwt.sign(
      { test: "heheh" },
      env.jwtRefreshToken as string,
      {
        expiresIn: -1,
      }
    );

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${token}`);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(body.status).toBe("KO");
    expect(request.status).toBe(http.StatusForbidden);
    expect(body.code).toBe(http.StatusForbidden);
    expect(body.messege).toBe(defaultErrorMessege.forbidden);
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
  });
  test("session response data should be a string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
    expect(body.session).toBeString();
  });
  test("session response data should be defined", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
    expect(body.session).toBeDefined();
    expect(body.session).not.toBeUndefined();
  });
  test("session response data should be a jwt token", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
    expect(!verify(body.session)).toBeFalse();
  });
  test("expires response data should be defined", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
    expect(body.expires).toBeDefined();
    expect(body.expires).not.toBeUndefined();
  });
  test("expires response data should be a number", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .get("/auth/tokenizer")
        .set("Cookie", `session=${refreshToken}`);
    const body: TokenizerResponseData = request.body as TokenizerResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
    expect(request.status).toBe(http.StatusOk);
    expect(body.expires).toBeNumber();
  });
});
