import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

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
