import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import generatePaymentOrderId from "../../subscriptions/services/generatePaymentOrderId";
import getTestUserPaymentHistory from "../../../../tests/utils/getTestUserPaymentHistory";
import { PaymentsHistory } from "../../../../../packages/prisma/generated/client";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Update User Payment History Status API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/payment-history/0/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the order id is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(`/v1/payment-history/${user?.name}/0`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request body is empty", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).patch(
        `/v1/payment-history/${user?.name}/${generatePaymentOrderId()}`
      );

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the sended request body field is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/payment-history/${user?.name}/${generatePaymentOrderId()}`)
        .send({
          hehe: "testttt",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the sended request body status field is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/payment-history/${user?.name}/${generatePaymentOrderId()}`)
        .send({
          status: "testttt",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the payment request doesn't found", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/payment-history/${user?.name}/${generatePaymentOrderId()}`)
        .send({
          status: "success",
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
        });

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
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
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner user data field must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
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
  test("returned response data owner user data field must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data must be included 'updated_data' data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status: "success",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
  });
  test("returned response data status 'updated_data' field must be updated", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const status: string = "pending";
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data.status).toBe(status);
  });
  test("returned response data 'updated' must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const status: string = "pending";
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.updated).toBeBoolean();
  });
  test("returned response data 'updated' must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userPaymentHistory: Awaited<PaymentsHistory | null> =
      await getTestUserPaymentHistory(user?.id || 0);
    const status: string = "pending";
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(
          `/v1/payment-history/${user?.name}/${userPaymentHistory?.order_id}`
        )
        .send({
          status,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.updated).toBeTrue();
  });
});
