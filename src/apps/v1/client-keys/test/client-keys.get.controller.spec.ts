import supertest, { Request } from "supertest";
import app from "../../../../main";
import { test, expect, describe } from "bun:test";
import client from "../../../../libs/configs/prisma";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import { User } from "../../../../../generated/client";

describe("Unit-Testing Get User Client Keys API Endpoint", () => {
  test("should be return 200 status code", async () => {
    const { accessToken } = generateMocksJWTToken();

    const user: Awaited<User | null> = await client.user.findFirst();
    const request: Awaited<Request> = await supertest(app)
      .get(`/v1/client-keys/${encodeURIComponent(user?.name || "")}`)
      .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const { accessToken } = generateMocksJWTToken();

    const user: Awaited<User | null> = await client.user.findFirst();
    const request: Awaited<Request> = await supertest(app)
      .get(`/v1/client-keys/${encodeURIComponent(user?.name || "")}`)
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 401 status code if the user doesn't have a token", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request: Awaited<Request> = await supertest(app).get(
      `/v1/client-keys/${encodeURIComponent(user?.name || "")}`
    );

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user token has invalid signature", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request: Awaited<Request> = await supertest(app)
      .get(`/v1/client-keys/${encodeURIComponent(user?.name || "")}`)
      .set("Authorization", `Bearer !`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user is doesn't found", async () => {
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .get(`/v1/client-keys/${encodeURIComponent("0")}`)
      .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});
