/* eslint-disable no-console */

import { test, expect, describe, afterAll } from "bun:test";
import prisma from "@/libs/prisma";
import supertest from "supertest";
import app from "@/main";
import http from "@/constant/code";
import { User } from "prisma/generated/client";
import { ErrorResponse } from "@/utils/interfaces/error-response";

afterAll(async () => prisma.$disconnect());

describe("Update User", () => {
  test("should be return 400 status code if the payload is empty", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The payload must be at least have one between bio, avatar, name, or email"
    );
  });
});
