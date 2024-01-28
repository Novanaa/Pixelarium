import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";

describe("Unit-test Get Single User Picture API Endpoint", () => {
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/pictures/1728`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/pictures/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(
        `/v1/pictures/${userGallery.pictures[0].uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(200);
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
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be contains picture field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.picture).toBeDefined();
    expect(request.body.data.picture).not.toBeUndefined();
    expect(request.body.data.picture).not.toBeNull();
  });
  test("returned response data should be contains embed_pictures_links field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.embed_pictures_links).toBeDefined();
    expect(request.body.data.embed_pictures_links).not.toBeUndefined();
    expect(request.body.data.embed_pictures_links).not.toBeNull();
  });
  test("returned response embed_pictures_links field data should be contains html link field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.embed_pictures_links.html_link).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.html_link
    ).not.toBeUndefined();
    expect(request.body.data.embed_pictures_links.html_link).not.toBeNull();
  });
  test("returned response embed_pictures_links field data should be contains direct link field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.embed_pictures_links.direct_link).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.direct_link
    ).not.toBeUndefined();
    expect(request.body.data.embed_pictures_links.direct_link).not.toBeNull();
  });
  test("returned response embed_pictures_links field data should be contains markdown link field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/pictures/${userGallery.pictures[0].uniquekey}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.embed_pictures_links.markdown_link).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.markdown_link
    ).not.toBeUndefined();
    expect(request.body.data.embed_pictures_links.markdown_link).not.toBeNull();
  });
});

describe("Unit-test Download User Picture API Core Logic", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/pictures/download/0/100`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the user picture uniquekey is invalid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/pictures/download/${user?.name}/100`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(
        `/v1/pictures/download/${user?.name}/${uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});
