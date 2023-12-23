import { test, expect, describe } from "bun:test";
import app from "../../../../main";
import supertest, { Request } from "supertest";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import JsonWebToken from "../../../../services/JsonWebToken";
import TJwtUserPayload from "../../../../interfaces/types/JwtUserPayloadTypes";
import payload from "../../../../tests/const/payload";
import { ClientKey, User } from "../../../../../generated/client";
import client from "../../../../libs/configs/prisma";
import getTestUser from "../../../../tests/utils/getTestUser";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-Testing Delete/Remove User Client Secret API Endpoint", () => {
  test("should be return 401 status code if the user doesn't have access token session", async () => {
    const request: Awaited<Request> =
      await supertest(app).delete("/v1/client-keys");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user access token session has invalid signature", async () => {
    const request: Awaited<Request> = await supertest(app)
      .delete("/v1/client-keys")
      .set("Authorization", `Bearer !`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the user doesn't have session token", async () => {
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .delete("/v1/client-keys")
      .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't found/not found", async () => {
    const payload: TJwtUserPayload = {
      providerId: 0,
      name: "Nopaa",
      email: "nopaaa@gmail.com",
      picture: "https://avatars.githubusercontent.com/u/123456789?v=4",
    };

    const jwt: JsonWebToken = new JsonWebToken();
    const { accessToken, refreshToken } = jwt.sign(payload);
    const request: Awaited<Request> = await supertest(app)
      .delete("/v1/client-keys")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .delete("/v1/client-keys")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("make sure it can accept application/json", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .delete("/v1/client-keys")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`)
      .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("Unit-Testing Private Access Delete/Remove User Client Secret API Endpoint", () => {
  test("should be return 422 status code if the subs plan is none", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 898 };
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request = await supertest(app)
      .delete(
        `/v1/plxm/client-keys?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is deactive", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);

    const request = await supertest(app)
      .delete(
        `/v1/plxm/client-keys?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
