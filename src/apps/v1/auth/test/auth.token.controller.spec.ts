import { describe, test, expect } from "bun:test";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import app from "../../../../main";
import supertest, { Request } from "supertest";
import JsonWebToken from "../../../../services/JsonWebToken";

describe("Unit-Testing Refresh Token Rotation API Endpoint", () => {
  test("should be return 200 status code", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .get("/v1/auth/token")
      .set("Cookie", `refreshToken=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<Request> = await supertest(app)
      .get("/v1/auth/token")
      .set("Cookie", `refreshToken=${refreshToken}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  //   test("should be return 422 if the refresh token is not valid", async () => {
  //     const { refreshToken } = generateMocksJWTToken();
  //     const request: Awaited<Request> = await supertest(app)
  //       .get("/v1/auth/token")
  //       .set("Cookie", `refreshToken=${refreshToken.toUpperCase()}`)
  //       .set("Content-Type", "application/json");

  //     console.log(request.body);
  //     expect(request.status).toBe(422);
  //     expect(request.body.status).toBe("KO");
  //   });
  test("should be return 401 status code if the user is unauth", async () => {
    const jwt: JsonWebToken = new JsonWebToken();

    const { refreshToken } = jwt.sign({
      providerId: 102,
      email: "myemail@gmail.com",
      name: "my name",
      picture: "this is my picture",
    });

    const request: Awaited<Request> = await supertest(app)
      .get("/v1/auth/token")
      .set("Cookie", `refreshToken=${refreshToken}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the user doesn't have a token", async () => {
    const request: Awaited<Request> = await supertest(app)
      .get("/v1/auth/token")
      .set("Content-Type", "application/json");

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
});
