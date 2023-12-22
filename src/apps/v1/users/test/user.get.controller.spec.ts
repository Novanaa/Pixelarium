import { describe, expect, test } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import JsonWebToken from "../../../../services/JsonWebToken";
import { ClientKey, User } from "../../../../../generated/client";
import payload from "../../../../tests/const/payload";
import getTestUser from "../../../../tests/utils/getTestUser";

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
    test("make sure it can accept application/json", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(`/v1/users/${user?.name || "ItsNvaa"}`)
          .set("Content-Type", "application/json");

      expect(request.status).toBe(200);
      expect(request.body.status).toBe("OK");
    });
  });
  describe("Unit-Testing Private Access Get Single User API Endpoint", () => {
    test("should be return 401 status code if the client id and client secret not provided", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(`/v1/plxm/users/${user?.name || "ItsNvaa"}`)
          .set("Content-Type", "application/json");

      expect(request.status).toBe(401);
      expect(request.body.status).toBe("KO");
    });
    test("should be return 422 status code if the client id is not valid", async () => {
      const user: Awaited<User | null> = await client.user.findFirst();
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(
            `/v1/plxm/users/${
              user?.name || "ItsNvaa"
            }?client_id=yeudh&client_secret=test`
          )
          .set("Content-Type", "application/json");

      expect(request.status).toBe(422);
      expect(request.body.status).toBe("KO");
    });
    test("should be return 400 status code if the user client id has invalid signature", async () => {
      const jwt: JsonWebToken = new JsonWebToken();
      const { refreshToken } = jwt.sign(payload);
      const user: Awaited<User | null> = await client.user.findFirst();
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(
            `/v1/plxm/users/${
              user?.name || "ItsNvaa"
            }?client_id=pxlmid-yautgakD&client_secret=test`
          )
          .set("Content-Type", "application/json")
          .set("Cookie", `session=${refreshToken}`);

      console.log(request.body);
      expect(request.status).toBe(400);
      expect(request.body.status).toBe("KO");
    });
    test("should be return 400 status code if the user client secret has invalid signature", async () => {
      const jwt: JsonWebToken = new JsonWebToken();
      const { refreshToken } = jwt.sign(payload);
      const user: Awaited<User | null> = await getTestUser(payload.providerId);
      const userClientKeys: Awaited<ClientKey | null> =
        await client.clientKey.findUnique({
          where: {
            user_id: user?.id,
          },
        });
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(
            `/v1/plxm/users/${
              user?.name || "ItsNvaa"
            }?client_id=${userClientKeys?.client_id}&client_secret=test`
          )
          .set("Content-Type", "application/json")
          .set("Cookie", `session=${refreshToken}`);

      console.log(request.body);
      expect(request.status).toBe(400);
      expect(request.body.status).toBe("KO");
    });
    test("should be return 200 status code", async () => {
      const jwt: JsonWebToken = new JsonWebToken();
      const { refreshToken } = jwt.sign(payload);
      const user: Awaited<User | null> = await getTestUser(payload.providerId);
      const userClientKeys: Awaited<ClientKey | null> =
        await client.clientKey.findUnique({
          where: {
            user_id: user?.id,
          },
        });
      const request: Awaited<supertest.Request | supertest.Response> =
        await supertest(app)
          .get(
            `/v1/plxm/users/${
              user?.name || "ItsNvaa"
            }?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
          )
          .set("Content-Type", "application/json")
          .set("Cookie", `session=${refreshToken}`);

      console.log(request.body);
      expect(request.status).toBe(200);
      expect(request.body.status).toBe("OK");
    });
  });
});
