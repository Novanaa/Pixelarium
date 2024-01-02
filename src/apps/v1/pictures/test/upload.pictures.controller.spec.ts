import { describe, test, expect } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import { User } from "../../../../../generated/client";
import payload from "../../../../tests/const/payload";

describe("Unit-Test User Pictures Upload Management API Endpoint", () => {
  test("should be return 422 status code if the request body payload is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/pictures/${user?.name}/upload`);

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body field is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          picture: {
            title: "test",
            hehe: "hehe",
            description: "test",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body use_external_image_url field is setted to true but request body image field is not filled", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture: {
            title: "test",
            description: "test",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request file field name is invalid", async () => {
    const x = {
      picture: {
        title: "test",
        description: "test",
      },
    };
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture", JSON.stringify(x))
        .attach("pictures", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user is not found", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/.../upload`)
        .send({
          picture: {
            title: "test",
            description: "test",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});
