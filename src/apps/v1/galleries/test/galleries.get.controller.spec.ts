import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import {
  ClientKey,
  Gallery,
  Picture,
  User,
} from "../../../../../generated/client";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";
import findUserGallery from "../utils/findUserGallery";
import client from "../../../../libs/configs/prisma";

describe("Unit-Testing Get User Gallery API Endpoint", () => {
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(
        `/v1/galleries/${encodeURIComponent(user?.name || "")}`
      );

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${encodeURIComponent(user?.name || "")}`)
        .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be includes owner data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    console.log(user);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${encodeURIComponent(user?.name || "")}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data should be includes user gallery data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    console.log(user);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${encodeURIComponent(user?.name || "")}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.gallery).toBeDefined();
    expect(request.body.data.gallery).not.toBeUndefined();
    expect(request.body.data.gallery).not.toBeNull();
  });
  test("returned response data should be includes user gallery total pictures data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    console.log(user);

    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${encodeURIComponent(user?.name || "")}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_gallery_pictures).toBeDefined();
    expect(request.body.data.total_gallery_pictures).not.toBeUndefined();
    expect(request.body.data.total_gallery_pictures).not.toBeNull();
  });
  test("should be return 404 status code if the user is doesn't defined", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${encodeURIComponent("123")}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("Verify User Client Keys - Unit-Testing Get User Gallery API Endpoint", () => {
  test("should be return 401 status code if the client id and secret isn't defined", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/plxm/galleries/${encodeURIComponent("123")}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the client id is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            "ItsNvaa"
          )}?client_id=wtteyd&client_secret=tey`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the credentials is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            "ItsNvaa"
          )}?client_id=pxlmid-yeyyr&client_secret=tey`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(
        `/v1/plxm/galleries/${encodeURIComponent(
          user?.name || "ItsNvaa"
        )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
      );

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            user?.name || "ItsNvaa"
          )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be includes owner data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            user?.name || "ItsNvaa"
          )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data should be includes user gallery data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            user?.name || "ItsNvaa"
          )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.gallery).toBeDefined();
    expect(request.body.data.gallery).not.toBeUndefined();
    expect(request.body.data.gallery).not.toBeNull();
  });
  test("returned response data should be includes total gallery pictures data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            user?.name || "ItsNvaa"
          )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_gallery_pictures).toBeDefined();
    expect(request.body.data.total_gallery_pictures).not.toBeUndefined();
    expect(request.body.data.total_gallery_pictures).not.toBeNull();
  });
  test("should be return 404 status code if the user is doesn't defined", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/plxm/galleries/${encodeURIComponent(
            "123"
          )}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("Unit-Testing Search User Gallery Pictures API Endpoint", () => {
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const gallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );
    const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { gallery_id: gallery?.id },
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(
        `/v1/galleries/${user?.name}/search?q=${pictures[0].title}`
      );

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const gallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );
    const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { gallery_id: gallery?.id },
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${user?.name}/search?q=${pictures[0].title}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response pictures data should be not undefined", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const gallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );
    const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { gallery_id: gallery?.id },
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${user?.name}/search?q=${pictures[0].title}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.pictures).toBeDefined();
    expect(request.body.data.pictures).not.toBeUndefined();
    expect(request.body.data.pictures).not.toBeNull();
  });
  test("returned response total found data should be not undefined", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const gallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );
    const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { gallery_id: gallery?.id },
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/${user?.name}/search?q=${pictures[0].title}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.total_found).toBeDefined();
    expect(request.body.data.total_found).not.toBeUndefined();
    expect(request.body.data.total_found).not.toBeNull();
  });
  test("should be return 404 status code if the user cannot be found", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const gallery: Awaited<Gallery | null> = await findUserGallery(
      user?.id || 0
    );
    const pictures: Awaited<Array<Picture>> = await client.picture.findMany({
      where: { gallery_id: gallery?.id },
    });
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(`/v1/galleries/0/search?q=${pictures[0].title}`)
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});
