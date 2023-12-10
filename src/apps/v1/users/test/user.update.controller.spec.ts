import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import { User } from "../../../../../generated/client";

describe("Unit-Testing User Update API Endpoint", () => {
  test("should be return 400 status code if the request id is not a number", async () => {
    const request = await supertest(app).patch("/v1/users/test");

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body is not allowed", async () => {
    const request = await supertest(app).patch("/v1/users/1").field({
      hehe: "wleee",
    });

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user data isn't found", async () => {
    const request = await supertest(app).patch("/v1/users/9999999").field({
      name: "wleee",
    });

    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the username is already taken", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        name: user?.name || "ItsNvaa",
      });

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app).patch(`/v1/users/${user?.id}`).field({
      bio: "wleee",
    });

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("should be return 400 status code if the request files field is not allowed", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("pictures", "./public/img/test/test.avif");

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request files image size is more than 20mb", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("picture", "./public/img/test/20mb.png");

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request files image ext is not supported", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("picture", "./public/img/test/test.sgi");

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.id}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("picture", "./public/img/test/test.avif");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});
