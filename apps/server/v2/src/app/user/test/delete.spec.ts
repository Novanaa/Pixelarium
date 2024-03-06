/* eslint-disable no-console */

import app from "@/main";
import supertest from "supertest";
import { expect, describe, test } from "bun:test";
import http from "@/constant/code";
import { ErrorResponse } from "@/utils/interfaces/error-response";

describe("DELETE /:name", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const responseMessege: string = "The user was doesn't exist!";
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).delete("/user/0");
    const body = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusNotFound);
    expect(body.messege).toBe(responseMessege);
    expect(body.status).toBe("KO");
  });
});
