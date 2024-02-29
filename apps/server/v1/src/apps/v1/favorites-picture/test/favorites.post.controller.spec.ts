import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import getTestUser from "../../../../tests/utils/getTestUser";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Add User Favorites Picture API Core Logic", () => {
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/favorites/0/123`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/favorites/0/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/favorites/${user?.name}/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(
        `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data must be included owner user data and match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
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
  test("returned response data owner must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data must be included inserted_favorites_data_picture field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_favorites_data_picture).toBeDefined();
    expect(
      request.body.data.inserted_favorites_data_picture
    ).not.toBeUndefined();
    expect(request.body.data.inserted_favorites_data_picture).not.toBeNull();
  });
  test("returned response data inserted_favorites_data_picture field must be included url data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_favorites_data_picture.url).toBeDefined();
    expect(
      request.body.data.inserted_favorites_data_picture.url
    ).not.toBeUndefined();
    expect(
      request.body.data.inserted_favorites_data_picture.url
    ).not.toBeNull();
  });
  test("returned response data must be included total_inserted_pictures field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_inserted_pictures).toBeDefined();
    expect(request.body.data.total_inserted_pictures).not.toBeUndefined();
    expect(request.body.data.total_inserted_pictures).not.toBeNull();
  });
  test("returned response data total_inserted_pictures field must be type of number", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_inserted_pictures).toBeDefined();
    expect(request.body.data.total_inserted_pictures).not.toBeUndefined();
    expect(request.body.data.total_inserted_pictures).not.toBeNull();
    expect(request.body.data.total_inserted_pictures).toBeNumber();
  });
  test("returned response data created field must be type of boolean", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeDefined();
    expect(request.body.created).not.toBeUndefined();
    expect(request.body.created).not.toBeNull();
    expect(request.body.created).toBeBoolean();
  });
  test("returned response data created field must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/favorites/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeDefined();
    expect(request.body.created).not.toBeUndefined();
    expect(request.body.created).not.toBeNull();
    expect(request.body.created).toBe(true);
  });
});
