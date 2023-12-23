import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import { ClientKey, User } from "../../../../../generated/client";
import TJwtUserPayload from "../../../../interfaces/types/JwtUserPayloadTypes";
import JsonWebToken from "../../../../services/JsonWebToken";
import payload from "../../../../tests/const/payload";
import getTestUser from "../../../../tests/utils/getTestUser";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-Testing Delete User API Endpoint", () => {
  test("should be return 400 status code if the request id params is not numberic", async () => {
    const { accessToken: token } = generateMocksJWTToken();
    const request = await supertest(app)
      .delete("/v1/users/test")
      .set("Authorization", `Bearer ${token}`);

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the token is invalid signature", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.id}`)
      .set("Authorization", `Bearer !`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the token is not found", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app).delete(`/v1/users/${user?.id}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app).delete(`/v1/users/${user?.id}`);

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("Make sure it can accept application/json", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.id}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("Unit-Testing Private Access - Delete User API Endpoint", () => {
  test("should be return 401 status code if the user doesn't have a session token", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const { accessToken: token } = generateMocksJWTToken();
    const request = await supertest(app)
      .delete(
        `/v1/plxm/users/${user?.id}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Authorization", `Bearer ${token}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is none", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 898 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);
    const request = await supertest(app)
      .delete(
        `/v1/plxm/users/${user?.id}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is deactive", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);
    const request = await supertest(app)
      .delete(
        `/v1/plxm/users/${user?.id}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
