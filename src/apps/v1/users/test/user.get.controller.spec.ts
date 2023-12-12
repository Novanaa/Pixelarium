import { describe, expect, test } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import { User } from "../../../../../generated/client";

describe("Unit-Testing Get User API Endpoint", () => {
  describe("Unit-Testing Get Single User API Endpoint", () => {
    test("should be return 404 status code if the user is not found", async () => {
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app).get("/v1/users/1902");

      expect(request.status).toBe(404);
      expect(request.body.status).toBe("KO");
    });
    test("should be return 200 status code", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app).get(`/v1/users/${user?.name || "ItsNvaa"}`);

      expect(request.status).toBe(200);
      expect(request.body.status).toBe("OK");
    });
  });
});
