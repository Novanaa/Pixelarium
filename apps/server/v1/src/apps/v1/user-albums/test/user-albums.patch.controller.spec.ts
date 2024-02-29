import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import getUserAlbums from "../services/getUserAlbums";
import { Album } from "../../../../../packages/prisma/generated/client";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Update User Album API Core Logic", () => {
  test("should be return 400 status code if the request params album id is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/albums/0/test`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request body is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/albums/0/1`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/albums/0/1`).send({
        hehe: "hehe",
      });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/albums/0/1`).send({
        title: "testtt",
      });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user album data doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/0`)
        .send({
          title: "testtt",
        });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        });

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
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
  test("returned response data must be included old_data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.old_data).toBeDefined();
    expect(request.body.data.old_data).not.toBeUndefined();
    expect(request.body.data.old_data).not.toBeNull();
  });
  test("returned response data must be included updated_data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
  });
  test("returned response data updated_data field must be match to want field data updated", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const title: string = "hehe";
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
    expect(request.body.data.updated_data.title).toBe(title);
  });
  test("returned response data owner must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data 'updated' field must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.updated).toBeBoolean();
  });
  test("returned response data 'updated' field must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/albums/${user?.name}/${userAlbum[0].id}`)
        .send({
          title: "testtt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.updated).toBeBoolean();
    expect(request.body.updated).toBeTrue();
  });
});
