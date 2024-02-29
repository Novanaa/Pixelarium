import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import {
  ClientKey,
  User,
} from "../../../../../packages/prisma/generated/client";
import TJwtUserPayload from "../../../../interfaces/types/JwtUserPayloadTypes";
import JsonWebToken from "../../../../services/JsonWebToken";
import payload from "../../../../tests/const/payload";
import getTestUser from "../../../../tests/utils/getTestUser";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-Testing Delete User API Endpoint", () => {
  test("should be return 422 status code if the token is invalid signature", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.name}`)
      .set("Authorization", `Bearer !`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the token is not found", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app).delete(`/v1/users/${user?.name}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app).delete(`/v1/users/${user?.name}`);

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("Make sure it can accept application/json", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.name}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("Verify User Client Keys - Unit-Testing Private Access - Delete User API Endpoint", () => {
  test("should be return 401 status code if the client id and client secret not provided", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const { accessToken: token } = jwt.sign(userPayload);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/plxm/users/${user?.name}`)
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the client id is not valid", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const { accessToken: token } = jwt.sign(userPayload);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/plxm/users/${user?.name}?client_id=test&client_secret=1782`
        )
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
