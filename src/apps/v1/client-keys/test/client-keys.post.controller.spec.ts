import app from "../../../../main";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import { describe, test, expect } from "bun:test";
import supertest, { Request } from "supertest";
import JsonWebToken from "../../../../services/JsonWebToken";
import TJwtUserPayload from "../../../../interfaces/types/JwtUserPayloadTypes";
import payload from "../../../../tests/const/payload";

describe("Unit-Testing Generate User Client Secret API Endpoint", () => {
  test("should be return 201 status code", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 422 status code if the user doesn't have token", async () => {
    const { accessToken } = generateMocksJWTToken();

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the authorization token is not sended", async () => {
    const { refreshToken } = generateMocksJWTToken();

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Content-Type", "application/json")
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the authorization token has invalid signature", async () => {
    const { refreshToken, accessToken } = generateMocksJWTToken();

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessToken.toUpperCase()}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the user request doesn't found", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const { refreshToken, accessToken } = jwt.sign({
      providerId: 102,
      email: "myemail@gmail.com",
      name: "my name",
      picture: "this is my picture",
    });

    const request: Awaited<Request> = await supertest(app)
      .post("/v1/client-keys/generate")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
});

describe("Unit-Testing Private Access Generate User Client Secret API Endpoint", () => {
  test("should be return 401 status code if the user doesn't have a session token", async () => {
    const { accessToken: token } = generateMocksJWTToken();
    const request = await supertest(app)
      .post(`/v1/plxm/client-keys/generate`)
      .set("Authorization", `Bearer ${token}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is none", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 898 };
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);

    const request = await supertest(app)
      .post(`/v1/plxm/client-keys/generate`)
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is deactive", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };
    const { accessToken: token, refreshToken } = jwt.sign(userPayload);

    const request = await supertest(app)
      .post(`/v1/plxm/client-keys/generate`)
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
