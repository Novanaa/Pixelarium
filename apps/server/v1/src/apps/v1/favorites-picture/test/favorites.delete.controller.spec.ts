import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import JsonWebToken from "../../../../services/JsonWebToken";

describe("Unit-test Delete Favorites User Picture API Core Logic", () => {
  test("should be return 401 status code if the authorization bearer is not provided", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/123`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the authorization bearer is invalid", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/123`)
        .set("Authorization", `Bearer 123`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the session refresh token is not provided", async () => {
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/123`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the decoded session refresh token and decoded bearer token authorization is not match", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(1);
    const { accessToken } = generateMocksJWTToken();
    const { refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/123`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/123`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/0/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(`/v1/favorites/${user?.name}/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .delete(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});
