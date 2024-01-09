import { test, expect, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import { User } from "../../../../../generated/client";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";

describe("Unit-test Update User Gallery Picture API Endpoint", () => {
  test("should be return 400 status code if the user gallery picture uniquekey is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).patch(`/v1/pictures/${user?.name}/18288`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user wasn't exist", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).patch(`/v1/pictures/0/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body field is not allowed", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(`/v1/pictures/${user?.name}/${uniquekey}`)
        .send({
          hehe: "hehe",
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the image_url is not a valid image url", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(`/v1/pictures/${user?.name}/${uniquekey}`)
        .send({
          image_url: "hehe",
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
});
