import { describe, test, expect } from "bun:test";
import app from "../../../../main";
import validator from "validator";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import messege from "../../../../const/readonly/messege";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Generate Subscription Transaction Token API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/subscription/payments/tokenizer/0`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request body is empty", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(
        `/v1/subscription/payments/tokenizer/${user?.name}`
      );

    console.log(request.body);
    expect(request.body.messege).toBe(messege.emptyFields);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          hehe: "test",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body interval_count_in_month field type is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: "hehe",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body plan field type is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "test",
            },
          },
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        });

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included 'request_from' data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.request_from).toBeDefined();
    expect(request.body.data.request_from).not.toBeUndefined();
    expect(request.body.data.request_from).not.toBeNull();
  });
  test("returned response data 'request_from' field must be match to user obj", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    const userObj = jsonifyUserObject(user);

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.request_from).toBeDefined();
    expect(request.body.data.request_from).not.toBeUndefined();
    expect(request.body.data.request_from).not.toBeNull();
    expect(request.body.data.request_from).toMatchObject(userObj);
  });
  test("returned response data 'request_from' field must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.request_from.email).toBeUndefined();
    expect(request.body.data.request_from.password).toBeUndefined();
  });
  test("returned response data must be included transaction_secret field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret).toBeDefined();
    expect(request.body.data.transaction_secret).not.toBeUndefined();
    expect(request.body.data.transaction_secret).not.toBeNull();
  });
  test("returned response data transaction_secret field must be included transaction_token data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.transaction_secret.transaction_token
    ).toBeDefined();
    expect(
      request.body.data.transaction_secret.transaction_token
    ).not.toBeUndefined();
    expect(
      request.body.data.transaction_secret.transaction_token
    ).not.toBeNull();
  });
  test("returned response data transaction_secret field must be included transaction_token data and type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.transaction_secret.transaction_token
    ).toBeDefined();
    expect(
      request.body.data.transaction_secret.transaction_token
    ).not.toBeUndefined();
    expect(
      request.body.data.transaction_secret.transaction_token
    ).not.toBeNull();
    expect(request.body.data.transaction_secret.transaction_token).toBeString();
  });
  test("returned response data transaction_secret field must be included order_id field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret.order_id).toBeDefined();
    expect(request.body.data.transaction_secret.order_id).not.toBeUndefined();
    expect(request.body.data.transaction_secret.order_id).not.toBeNull();
  });
  test("returned response data transaction_secret order_id field data must be type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret.order_id).toBeDefined();
    expect(request.body.data.transaction_secret.order_id).not.toBeUndefined();
    expect(request.body.data.transaction_secret.order_id).not.toBeNull();
    expect(request.body.data.transaction_secret.order_id).toBeString();
  });
  test("returned response data transaction_secret field must be included redirect_url field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret.redirect_url).toBeDefined();
    expect(
      request.body.data.transaction_secret.redirect_url
    ).not.toBeUndefined();
    expect(request.body.data.transaction_secret.redirect_url).not.toBeNull();
  });
  test("returned response data transaction_secret redirect_url field data must be type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret.redirect_url).toBeDefined();
    expect(
      request.body.data.transaction_secret.redirect_url
    ).not.toBeUndefined();
    expect(request.body.data.transaction_secret.redirect_url).not.toBeNull();
    expect(request.body.data.transaction_secret.redirect_url).toBeString();
  });
  test("returned response data transaction_secret redirect_url field data must be type of string and a valid url", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.transaction_secret.redirect_url).toBeDefined();
    expect(
      request.body.data.transaction_secret.redirect_url
    ).not.toBeUndefined();
    expect(request.body.data.transaction_secret.redirect_url).not.toBeNull();
    expect(request.body.data.transaction_secret.redirect_url).toBeString();
    expect(
      validator.isURL(request.body.data.transaction_secret.redirect_url)
    ).toBeTrue();
  });
  test("returned response data must be included ordered_plan field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.ordered_plan).toBeDefined();
    expect(request.body.data.ordered_plan).not.toBeUndefined();
    expect(request.body.data.ordered_plan).not.toBeNull();
  });
  test("returned response data ordered_plan field data must be included user plan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.ordered_plan.name).toBeDefined();
    expect(request.body.data.ordered_plan.name).not.toBeUndefined();
    expect(request.body.data.ordered_plan.name).not.toBeNull();
    expect(request.body.data.ordered_plan.name).toBeString();
  });
  test("returned response data ordered_plan field data must be included price field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.ordered_plan.price).toBeDefined();
    expect(request.body.data.ordered_plan.price).not.toBeUndefined();
    expect(request.body.data.ordered_plan.price).not.toBeNull();
    expect(request.body.data.ordered_plan.price).toBeNumber();
  });
  test("returned response data ordered_plan field data must be included total_price field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.ordered_plan.total_price).toBeDefined();
    expect(request.body.data.ordered_plan.total_price).not.toBeUndefined();
    expect(request.body.data.ordered_plan.total_price).not.toBeNull();
    expect(request.body.data.ordered_plan.total_price).toBeNumber();
  });
  test("returned response data created must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeBoolean();
  });
  test("returned response data created must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/subscription/payments/tokenizer/${user?.name}`)
        .send({
          data: {
            interval_count_in_month: 1,
            items_details: {
              plan: "Gold",
            },
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeTrue();
  });
});
