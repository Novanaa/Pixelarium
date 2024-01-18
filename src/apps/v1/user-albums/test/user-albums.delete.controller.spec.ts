import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import { Album, Picture } from "../../../../../generated/client";
import getUserAlbums from "../services/getUserAlbums";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import getUserGallery from "../../galleries/services/getUserGallery";
import client from "../../../../libs/configs/prisma";

describe("Unit-test Delete User Album API Core Logic", () => {
  test("should be return 400 status code if the user album id params is invalid", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/0/test`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/0/1`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user album doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/${user?.name}/0`)
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
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
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
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("Unit-test Delete User Album Picture API Core Logic", () => {
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/0/test/10`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the album id is invalid", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/0/test/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/0/0/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user album doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/${user?.name}/0/${uniquekey}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/albums/${user?.name}/${userAlbums[0].id}/${uniquekey}`)
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

    console.log(user);
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    console.log(userAlbums);
    const picture: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { album_id: userAlbums[0].id },
    });
    console.log(picture);
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/albums/${user?.name}/${userAlbums[0].id}/${picture[0].uniquekey}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("KO");
  });
});
