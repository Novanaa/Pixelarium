import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import generatePaymentOrderId from "../../subscriptions/services/generatePaymentOrderId";
import getTestUserPaymentHistory from "../../../../tests/utils/getTestUserPaymentHistory";
import { PaymentsHistory } from "../../../../../generated/client";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";
import dummyPaymentOrderId from "../../../../const/readonly/dummyPaymentOrderId";
import getUserSubscriptionPrice from "../../subscriptions/services/getUserSubscriptionPrice";
import PremiumUserPlan from "../../subscriptions/interfaces/types/PremiumUserPlan";
import getRoundedNumber from "../../../../utils/getRoundedNumber";
import convertUSDToIDR from "../../subscriptions/services/convertUSDToIDR";

describe("Unit-test Add new User Payment History API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/payment-history/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request body is empty", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/payment-history/${user?.name}`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          hehe: "testttt",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body 'order_id' is not type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: 1,
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body 'order_id' is is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: "testtt",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body 'plan' is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 1,
          plan: "testtt",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body 'plan' pass with value of 'none'", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 1,
          plan: "none",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the payment history data with the same order_id was already created", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(3);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: dummyPaymentOrderId,
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        });

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner field user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner field user data must be match to user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    const userObj = jsonifyUserObject(user);

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
    expect(request.body.data.owner).toMatchObject(userObj);
  });
  test("returned response data owner field user data must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data must be included inserted_data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data).toBeDefined();
    expect(request.body.data.inserted_data).not.toBeUndefined();
    expect(request.body.data.inserted_data).not.toBeNull();
  });
  test("returned response data inserted_data field must be included order_id data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: generatePaymentOrderId(),
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.order_id).toBeDefined();
    expect(request.body.data.inserted_data.order_id).not.toBeUndefined();
    expect(request.body.data.inserted_data.order_id).not.toBeNull();
  });
  test("returned response data inserted_data field must be match to sended order_id data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const orderId: string = generatePaymentOrderId();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: orderId,
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.order_id).toBe(orderId);
  });
  test("returned response data created field data must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const orderId: string = generatePaymentOrderId();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: orderId,
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeBoolean();
  });
  test("returned response data created field data must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const orderId: string = generatePaymentOrderId();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: orderId,
          interval_count: 3,
          plan: "Gold",
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeTrue();
  });
  test("returned response data inserted_data 'amount' field data must be correct", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const plan: string = "Gold";
    const intervalCount: number = 3;
    const planPrice: number = getUserSubscriptionPrice(plan as PremiumUserPlan);
    const orderId: string = generatePaymentOrderId();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: orderId,
          interval_count: intervalCount,
          plan,
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.amount.USD).toBe(
      planPrice * intervalCount
    );
  });
  test("returned response data inserted_data 'amount in IDR' field data must be correct", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const plan: string = "Gold";
    const intervalCount: number = 3;
    const planPrice: number = getUserSubscriptionPrice(plan as PremiumUserPlan);
    const orderId: string = generatePaymentOrderId();
    const amountInIDR: number = getRoundedNumber(
      await convertUSDToIDR(planPrice * planPrice)
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/payment-history/${user?.name}`)
        .send({
          order_id: orderId,
          interval_count: intervalCount,
          plan,
          status: "pending",
          order_date: "2024-01-23T13:16:13.279Z",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.amount.IDR).toBe(amountInIDR);
  });
});
