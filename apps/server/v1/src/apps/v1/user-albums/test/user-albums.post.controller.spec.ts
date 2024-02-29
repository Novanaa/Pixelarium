import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import {
  Album,
  ClientKey,
} from "../../../../../packages/prisma/generated/client";
import getUserAlbums from "../services/getUserAlbums";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-test Insert Existing Album Picture API Core Logic", () => {
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(`/v1/albums/0/123/123`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the album id is invalid", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(`/v1/albums/0/test/123`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(`/v1/albums/0/1/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user album doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(`/v1/albums/${user?.name}/0/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user album doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(
        `/v1/albums/${user?.name}/${userAlbum[0].id}/${uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).post(
        `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner user data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner field must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
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
  test("returned response data owner field must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data must be included album_data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.album_data).toBeDefined();
    expect(request.body.data.album_data).not.toBeUndefined();
    expect(request.body.data.album_data).not.toBeNull();
  });
  test("returned response data album_data field must be included pictures data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.album_data.pictures).toBeDefined();
    expect(request.body.data.album_data.pictures).not.toBeUndefined();
    expect(request.body.data.album_data.pictures).not.toBeNull();
  });
  test("returned response data album_data field must be included pictures data field and type of array", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.album_data.pictures).toBeDefined();
    expect(request.body.data.album_data.pictures).not.toBeUndefined();
    expect(request.body.data.album_data.pictures).not.toBeNull();
    expect(request.body.data.album_data.pictures).toBeArray();
  });
  test("returned response data must be included inserted_picture data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_picture).toBeDefined();
    expect(request.body.data.inserted_picture).not.toBeUndefined();
    expect(request.body.data.inserted_picture).not.toBeNull();
  });
  test("returned response data inserted must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.inserted).toBeBoolean();
  });
  test("returned response data inserted must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.inserted).toBeTrue();
  });
});

describe("Verify User Client Keys - Unit-test Insert Existing Album Picture API Core Logic", () => {
  test("should be return 401 status code if the user client keys is not provided", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user client_id is not valid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}?client_id=123&client_secret=1882`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user client keys is not valid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}?client_id=pxlmid-17728&client_secret=1882`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("API Grant Access - Unit-test Insert Existing Album Picture API Core Logic", () => {
  test("should be return 422 status code if the user subs plan is none", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(898);
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user subs plan is netherite but is inactive", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(7);
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(321);
    const userAlbum: Awaited<Array<Album>> = await getUserAlbums(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}/${userAlbum[0].id}/${userGallery.pictures[0].uniquekey}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});

describe("Unit-test Create new User Album API Core Logic", () => {
  test("should be return 400 status code if the request body is empty", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/albums/0`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the request body is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/albums/0`).send({
        ehehe: "testtttttt",
      });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the description request body field is missing", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/albums/0`).send({
        title: "testtttttt",
      });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/albums/0`).send({
        title: "testtttttt",
        description: "tetsttttt",
      });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
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
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner must be match to user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
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
  test("returned response data owner must be not included user email and password", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.email).toBeUndefined();
    expect(request.body.data.owner.password).toBeUndefined();
  });
  test("returned response data must be included inserted_data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data).toBeDefined();
    expect(request.body.data.inserted_data).not.toBeUndefined();
    expect(request.body.data.inserted_data).not.toBeNull();
  });
  test("returned response data inserted_data fiels must be included pictures data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.pictures).toBeDefined();
    expect(request.body.data.inserted_data.pictures).not.toBeUndefined();
    expect(request.body.data.inserted_data.pictures).not.toBeNull();
  });
  test("returned response data inserted_data fiels must be included pictures data and must be type an array", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.pictures).toBeDefined();
    expect(request.body.data.inserted_data.pictures).not.toBeUndefined();
    expect(request.body.data.inserted_data.pictures).not.toBeNull();
    expect(request.body.data.inserted_data.pictures).toBeArray();
  });
  test("returned response created field must be type of booelan", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeBoolean();
  });
  test("returned response created field must be true", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.created).toBeTrue();
  });
});

describe("verify User Client Keys - Unit-test Create new User Album API Core Logic", () => {
  test("should be return 401 status code if the user client keys is not provided", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/plxm/albums/${user?.name}`)
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user client keys is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}?client_id=pxlmid-1829&client_secret=1829`
        )
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("API Grant Access - Unit-test Create new User Album API Core Logic", () => {
  test("should be return 422 status code if the user subs plan is none", async () => {
    const user: Awaited<UserWithOptionalChaining | null> =
      await getTestUser(898);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user subs plan is inactive", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(7);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/albums/${user?.name}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          title: "testtttttt",
          description: "tetsttttt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
