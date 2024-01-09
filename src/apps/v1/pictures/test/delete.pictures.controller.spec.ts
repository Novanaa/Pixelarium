import { describe, test, expect } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import { User } from "../../../../../generated/client";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import JsonWebToken from "../../../../services/JsonWebToken";
import payload from "../../../../tests/const/payload";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";

const jwt: JsonWebToken = new JsonWebToken();
describe("Unit-Test Delete All User Gallery Pictures", () => {
  test("should be return 404 status code if the user wasn't found", async () => {
    const user: Awaited<User | null> = await getTestUser(3);
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/0/removes`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user gallery pictures is empty", async () => {
    const user: Awaited<User | null> = await getTestUser(3);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(1);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 401 status code if the session access token is not provided", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const { refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the session access token has invalid signature", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const { refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Authorization", `Bearer 772847`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the session refresh token is not provided", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const { accessToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the decoded token is not valid", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const { refreshToken } = generateMocksJWTToken();
    const { accessToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/removes`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});

describe("Unit-Test Delete Single User Gallery Picture", () => {
  test("should be return 400 status code if the picture uniquekey is not valid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/1772`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/0/${uniquekey}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user gallery pictures is empty", async () => {
    const user: Awaited<User | null> = await getTestUser(3);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user gallery picture doesn't exist", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the session access token isn't provided", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the session access token isn't valid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Authorization", `Bearer 772847`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the session refresh token isn't provided", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the session decoded token is not valid", async () => {
    const user: Awaited<User | null> = await getTestUser(1);
    const { accessToken } = generateMocksJWTToken();
    const { refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/pictures/${user?.name}/${uniquekey}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery> = await getUserGallery(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery> = await getUserGallery(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});
