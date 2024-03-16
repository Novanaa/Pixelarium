/* eslint-disable no-console */

import { test, expect, describe } from "bun:test";
import supertest from "supertest";
import app from "@/main";
import http from "@/constant/code";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import defaultErrorMessege from "@/constant/default-error-messege";

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
  test("should be return 200 status code", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .post("/auth/logout")
        .set("Cookie", "session=123");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.code).toBe(http.StatusOk);
    expect(body.messege).toBe(
      "Logout successful. Thank you for using our service. Have a great day!"
    );
  });
});
