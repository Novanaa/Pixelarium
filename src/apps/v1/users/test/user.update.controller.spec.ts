import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";
import { ClientKey, User } from "../../../../../generated/client";
import payload from "../../../../tests/const/payload";
import JsonWebToken from "../../../../services/JsonWebToken";
import TJwtUserPayload from "../../../../interfaces/types/JwtUserPayloadTypes";
import getTestUser from "../../../../tests/utils/getTestUser";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-Testing User Update API Endpoint", () => {
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
      .patch(`/v1/users/${user?.name}`)
      .field({
        name: user?.name || "ItsNvaa",
      });

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.name}`)
      .field({
        bio: "wleee",
      });

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await client.user.findFirst();
    const request = await supertest(app)
      .patch(`/v1/users/${user?.name}`)
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
      .patch(`/v1/users/${user?.name}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("pictures", "./public/img/test/test.avif");

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request files image size is more than 20mb", async () => {
    const user: Awaited<User | null> = await getTestUser(898);
    const request = await supertest(app)
      .patch(`/v1/users/${user?.name}`)
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
      .patch(`/v1/users/${user?.name}`)
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
      .patch(`/v1/users/${user?.name}`)
      .field({
        bio: "wleee",
      })
      .set("Content-Type", "application/json")
      .attach("picture", "./public/img/test/test.avif");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("API Grant Access - Unit-Testing Private Access User Update API Endpoint", () => {
  test("should be return 422 status code if the subs plan is none", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 898 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const { refreshToken } = jwt.sign(userPayload);
    const request = await supertest(app)
      .patch(
        `/v1/plxm/users/${user?.name}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .field("bio", "test")
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the subs plan is deactive", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const { refreshToken } = jwt.sign(userPayload);
    const request = await supertest(app)
      .patch(
        `/v1/plxm/users/${user?.name}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      )
      .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});

describe("Verify User Client Keys - Unit-Testing Private Access User Update API Endpoint", () => {
  test("should be return 401 status code if the client id and client secret not provided", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const { refreshToken } = jwt.sign(userPayload);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/plxm/users/${user?.name}`)
        .set("Content-Type", "application/json")
        .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the client id is not valid", async () => {
    const jwt: JsonWebToken = new JsonWebToken();
    const userPayload: TJwtUserPayload = { ...payload, providerId: 123 };

    const user: Awaited<User | null> = await getTestUser(
      userPayload.providerId
    );
    const { refreshToken } = jwt.sign(userPayload);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .patch(`/v1/plxm/users/${user?.name}?client_id=782&client_secret=2683`)
        .set("Content-Type", "application/json")
        .set("Cookie", `session=${refreshToken}`);

    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
