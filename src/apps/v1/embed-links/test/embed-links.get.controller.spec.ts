import { describe, test, expect } from "bun:test";
import supertest from "supertest";
import app from "../../../../main";
import getTestUser from "../../../../tests/utils/getTestUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import payload from "../../../../tests/const/payload";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";

describe("Unit-test Get Picture Embed Links", () => {
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/embed-links/0/8273892`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the picture uniquekey doesn't valid", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/embed-links/${user?.name}/8273892`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).get(`/v1/embed-links/${user?.name}/${uniquekey}`);

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
        `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
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
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be contains owner user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner must be match user object", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
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
  test("returned response data owner must be have provided id and name", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner.provider_id).toBeDefined();
    expect(request.body.data.owner.provider_id).not.toBeUndefined();
    expect(request.body.data.owner.provider_id).not.toBeNull();
    expect(request.body.data.owner.name).toBeDefined();
    expect(request.body.data.owner.name).not.toBeUndefined();
    expect(request.body.data.owner.name).not.toBeNull();
  });
  test("returned response data must be contains picture_data field", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.picture_data).toBeDefined();
    expect(request.body.data.picture_data).not.toBeUndefined();
    expect(request.body.data.picture_data).not.toBeNull();
  });
  test("returned response picture_data field must be have url field data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.picture_data.url).toBeDefined();
    expect(request.body.data.picture_data.url).not.toBeUndefined();
    expect(request.body.data.picture_data.url).not.toBeNull();
    expect(request.body.data.picture_data.url).toBeString();
    expect(request.body.data.picture_data.url).toBe(
      userGallery.pictures[0].url
    );
  });
  test("returned response embed_pictures_links data field must be provided", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.embed_pictures_links).toBeDefined();
    expect(request.body.data.embed_pictures_links).not.toBeUndefined();
    expect(request.body.data.embed_pictures_links).not.toBeNull();
  });
  test("returned response embed_pictures_links data field must have html link data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
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
  test("returned response embed_pictures_links data field must have direct link data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
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
  test("returned response embed_pictures_links data field must have markdown link data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
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
  test("returned response embed_pictures_links data html link field must contains img_link field and anchor_link", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.html_link.img_link
    ).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.html_link.img_link
    ).not.toBeUndefined();
    expect(
      request.body.data.embed_pictures_links.html_link.img_link
    ).not.toBeNull();
    expect(
      request.body.data.embed_pictures_links.html_link.anchor_link
    ).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.html_link.anchor_link
    ).not.toBeUndefined();
    expect(
      request.body.data.embed_pictures_links.html_link.anchor_link
    ).not.toBeNull();
  });
  test("returned response embed_pictures_links data direct link field must contains image_url field and image_link", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.direct_link.image_link
    ).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_link
    ).not.toBeUndefined();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_link
    ).not.toBeNull();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_url
    ).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_url
    ).not.toBeUndefined();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_url
    ).not.toBeNull();
  });
  test("returned response embed_pictures_links data markdown link field must contains tooltip_link", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.markdown_link.tooltip_link
    ).toBeDefined();
    expect(
      request.body.data.embed_pictures_links.markdown_link.tooltip_link
    ).not.toBeUndefined();
    expect(
      request.body.data.embed_pictures_links.markdown_link.tooltip_link
    ).not.toBeNull();
  });
  test("returned response embed_pictures_links data html link field img_link field and anchor_link must be type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.html_link.img_link
    ).toBeString();
    expect(
      request.body.data.embed_pictures_links.html_link.anchor_link
    ).toBeString();
  });
  test("returned response embed_pictures_links data direct link field image_link field and image_url must be type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.direct_link.image_url
    ).toBeString();
    expect(
      request.body.data.embed_pictures_links.direct_link.image_link
    ).toBeString();
  });
  test("returned response embed_pictures_links data markdown link field tooltip field must be type of string", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .get(
          `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(
      request.body.data.embed_pictures_links.markdown_link.tooltip_link
    ).toBeString();
  });
});
