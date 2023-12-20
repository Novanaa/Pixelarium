import { describe, test, expect } from "bun:test";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import app from "../../../../main";
import supertest, { Request } from "supertest";

describe("Unit-Testing Logout User API Endpoint", () => {
  test("should be return 200 status code", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .post("/v1/auth/logout")
      .set("Cookie", `refreshToken=${refreshToken}`);

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("Make sure it can accept application/json", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .post("/v1/auth/logout")
      .set("Cookie", `refreshToken=${refreshToken}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 401 status code if the user doesn't have token", async () => {
    const request: Awaited<Request> = await supertest(app)
      .post("/v1/auth/logout")
      .set("Content-Type", "application/json");

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
});
