/* eslint-disable no-console */

import { test, expect, describe } from "bun:test";
import supertest from "supertest";
import app from "@/main";
import http from "@/constant/code";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import defaultErrorMessege from "@/constant/default-error-messege";
import env from "@/configs/env";
import jwt from "jsonwebtoken";
import { LogoutResponseData } from "../controllers/logout";
import { GenerateToken, generate } from "@/utils/jsonwebtoken";
import prisma from "@/libs/prisma";
import { User } from "prisma/generated/client";

describe("User Logout Authentication", () => {
  test("should be return 401 status code if the cookies is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).post("/auth/logout");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusUnauthorized);
    expect(body.code).toBe(http.StatusUnauthorized);
    expect(body.messege).toBe(defaultErrorMessege.unauth);
  });
  test("should be return 401 status code if the session cookies is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", "test=123");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusUnauthorized);
    expect(body.code).toBe(http.StatusUnauthorized);
    expect(body.messege).toBe(defaultErrorMessege.unauth);
  });
  test("should be return 403 status code if the session token is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", "session=123");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusForbidden);
    expect(body.code).toBe(http.StatusForbidden);
    expect(body.messege).toBe(defaultErrorMessege.forbidden);
  });
  test("should be return 403 status code if the session token is expires", async () => {
    const token: string = jwt.sign(
      { test: "heheh" },
      env.jwtRefreshToken as string,
      {
        expiresIn: -1,
      }
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", `session=${token}`);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusForbidden);
    expect(body.code).toBe(http.StatusForbidden);
    expect(body.messege).toBe(defaultErrorMessege.forbidden);
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", `session=${refreshToken}`);
    const body: LogoutResponseData = request.body as LogoutResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
  });
  test("response data messege should be => Logout successful. Thank you for using our service. Have a great day!", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", `session=${refreshToken}`);
    const body: LogoutResponseData = request.body as LogoutResponseData;

    console.log(body);
    expect(body.messege).toBe(
      "Logout successful. Thank you for using our service. Have a great day!"
    );
  });
  test("response data status should be OK", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const { refreshToken }: GenerateToken = generate(user as User);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", `session=${refreshToken}`);
    const body: LogoutResponseData = request.body as LogoutResponseData;

    console.log(body);
    expect(body.status).toBe("OK");
  });
});
