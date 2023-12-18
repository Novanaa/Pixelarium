import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import generateMocksAccessToken from "../../../../tests/utils/generateMocksAccessToken";
import expiredToken from "../../../../tests/const/expiredToken";

describe("Unit-Testing Delete User API Endpoint", () => {
  test("should be return 400 status code if the request id params is not numberic", async () => {
    const token: string = generateMocksAccessToken();
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
  test("should be return 401 status code if the token is expired", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.id}`)
      .set("Authorization", `Bearer ${expiredToken}`);

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
