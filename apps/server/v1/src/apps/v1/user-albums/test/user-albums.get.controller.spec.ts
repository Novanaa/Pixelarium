import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";
import { Album } from "../../../../../packages/prisma/generated/client";
import getUserAlbums from "../services/getUserAlbums";

describe("Unit-test Get User Albums API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).get(`/v1/albums/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).get(`/v1/albums/${user?.name}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data owner must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    const userObj = jsonifyUserObject(user);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
    expect(request.body.data.owner).toMatchObject(userObj);
  });
  test("returned response data must be included user_albums data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_albums).toBeDefined();
    expect(request.body.data.user_albums).not.toBeUndefined();
    expect(request.body.data.user_albums).not.toBeNull();
  });
  test("returned response data user_albums data field must be an array", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_albums).toBeDefined();
    expect(request.body.data.user_albums).not.toBeUndefined();
    expect(request.body.data.user_albums).not.toBeNull();
    expect(request.body.data.user_albums).toBeArray();
  });
  test("returned response data must be included total_user_albums field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_user_albums).toBeDefined();
    expect(request.body.data.total_user_albums).not.toBeUndefined();
    expect(request.body.data.total_user_albums).not.toBeNull();
  });
  test("returned response data total_user_albums field must be a number", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_user_albums).toBeDefined();
    expect(request.body.data.total_user_albums).not.toBeUndefined();
    expect(request.body.data.total_user_albums).not.toBeNull();
    expect(request.body.data.total_user_albums).toBeNumber();
  });
  test("returned response data owner must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data isSuccess must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBeBoolean();
  });
  test("returned response data isSuccess must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBe(true);
  });
});

describe("Unit-test Get Single User Album API Core Logic", () => {
  test("should be return 400 status code if the album id is invalid", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).get(`/v1/albums/0/test`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the album doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).get(`/v1/albums/${user?.name}/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).get(`/v1/albums/${user?.name}/${userAlbums[0].id}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be included owner user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner field must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    const userObj = jsonifyUserObject(user);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
    expect(request.body.data.owner).toMatchObject(userObj);
  });
  test("returned response data must be included user_album field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_album).toBeDefined();
    expect(request.body.data.user_album).not.toBeUndefined();
    expect(request.body.data.user_album).not.toBeNull();
  });
  test("returned response data user_album field must be type of object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_album).toBeDefined();
    expect(request.body.data.user_album).not.toBeUndefined();
    expect(request.body.data.user_album).not.toBeNull();
    expect(request.body.data.user_album).toBeTypeOf("object");
  });
  test("returned response data user_album field must be included pictures data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_album.pictures).toBeDefined();
    expect(request.body.data.user_album.pictures).not.toBeUndefined();
    expect(request.body.data.user_album.pictures).not.toBeNull();
  });
  test("returned response data user_album field must be included pictures data and type of array", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_album.pictures).toBeDefined();
    expect(request.body.data.user_album.pictures).not.toBeUndefined();
    expect(request.body.data.user_album.pictures).not.toBeNull();
    expect(request.body.data.user_album.pictures).toBeArray();
  });
  test("returned response data owner field must be not included user email data and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data isSuccess must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBeBoolean();
  });
  test("returned response data isSuccess must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbums: Awaited<Array<Album>> = await getUserAlbums(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .get(`/v1/albums/${user?.name}/${userAlbums[0].id}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBeTrue();
  });
});
