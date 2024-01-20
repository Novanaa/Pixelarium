import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import generateMocksJWTToken from "../../../../tests/utils/generateMocksJWTToken";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import paymentId from "../../../../const/readonly/paymentIdExample";
import JsonWebToken from "../../../../services/JsonWebToken";
import { Subscription } from "../../../../../generated/client";
import getUserSubscription from "../../../../utils/getUserSubscription";

const jwt: JsonWebToken = new JsonWebToken();
describe("Unit-test Deactivate User Subs API Core Logic", () => {
  test("should be return 401 status code if the auth token is not provided", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the auth token has invalid signature", async () => {
    const { refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0`)
        .set("Authorization", `Bearer test`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 401 status code if the session refresh token is not provided", async () => {
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the session refresh token is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(321);
    const { refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const { accessToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Authorization", `Bearer ${accessToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the payment id is not provided", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
    expect(request.body.messege).toBe(
      "User Subscription Payment ID Must Be Provided"
    );
  });
  test("should be return 400 status code if the payment id is invalid", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0?payment_id=hehe`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
    expect(request.body.messege).toBe(
      "The Payment Subscription ID Must Be a Valid Pixelarium Payment ID!"
    );
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(`/v1/subscription/deactivate/0?payment_id=${paymentId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user doesn't subscribed", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(123);
    const { accessToken, refreshToken } = generateMocksJWTToken();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/subscription/deactivate/${user?.name}?payment_id=${paymentId}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
    expect(request.body.messege).toBe("You doesn't have any plan!");
  });
  test("should be return 400 status code if the user subscription payment id is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(321);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/subscription/deactivate/${user?.name}?payment_id=${paymentId}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
    expect(request.body.messege).toBe(
      "The Payment Subscription ID is Invalid!"
    );
  });
  test.skip("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(321);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user?.id || 0
    );
    console.log(userSubs);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/subscription/deactivate/${user?.name}?payment_id=${userSubs?.payment_id}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`);

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("KO");
  });
  test.skip("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(321);
    const { accessToken, refreshToken } = jwt.sign({
      email: user?.email!,
      name: user?.name!,
      picture: user?.picture!,
      providerId: user?.provider_id!,
    });
    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user?.id || 0
    );
    console.log(userSubs);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .delete(
          `/v1/subscription/deactivate/${user?.name}?payment_id=${userSubs?.payment_id}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Cookie", `session=${refreshToken}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("KO");
  });
});
