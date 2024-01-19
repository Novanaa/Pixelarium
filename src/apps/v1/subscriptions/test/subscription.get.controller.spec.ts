import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Get User Subscription Status API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/subscription/status/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/subscription/status/${user?.name}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be included user_details field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_details).toBeDefined();
    expect(request.body.data.user_details).not.toBeUndefined();
    expect(request.body.data.user_details).not.toBeNull();
  });
  test("returned response data user_details field must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    const userObj = jsonifyUserObject(user);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_details).toBeDefined();
    expect(request.body.data.user_details).not.toBeUndefined();
    expect(request.body.data.user_details).not.toBeNull();
    expect(request.body.data.user_details).toMatchObject(userObj);
  });
  test("returned response data must be included subscription_details field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.subscription_details).toBeDefined();
    expect(request.body.data.subscription_details).not.toBeUndefined();
    expect(request.body.data.subscription_details).not.toBeNull();
  });
  test("returned response data subscription_details field must be included user plan and status", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.subscription_details.plan).toBeDefined();
    expect(request.body.data.subscription_details.status).toBeDefined();
    expect(request.body.data.subscription_details.plan).not.toBeUndefined();
    expect(request.body.data.subscription_details.status).not.toBeUndefined();
    expect(request.body.data.subscription_details.plan).not.toBeNull();
    expect(request.body.data.subscription_details.status).not.toBeNull();
  });
  test("returned response data user_details field must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.user_details.email).toBeUndefined();
    expect(request.body.data.user_details.password).toBeUndefined();
  });
  test("returned response data isSuccess field must be type of boolean", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBeBoolean();
  });
  test("returned response data isSuccess field must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/subscription/status/${user?.name}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.isSuccess).toBeTrue();
  });
});
