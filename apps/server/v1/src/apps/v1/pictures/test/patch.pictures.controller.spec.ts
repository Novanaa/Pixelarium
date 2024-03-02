import { test, expect, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import {
  ClientKey,
  User,
} from "../../../../../packages/prisma/generated/client";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";
import dummyExternalPictureUrl from "../../../../const/readonly/dummyExternalPictureUrl";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import jsonifyUserObject from "../../../../tests/utils/jsonifyUserObject";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";

describe("Unit-test Update User Gallery Picture API Endpoint", () => {
  test("should be return 400 status code if the request file and request body is undefined", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app).patch(
        `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
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
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          image_url: "hehe",
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(`/v1/pictures/${user?.name}/${uniquekey}`)
        .send({
          image_url: "hehe",
        });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user gallery picture is empty", async () => {
    const user: Awaited<User | null> = await getTestUser(3);
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(`/v1/pictures/${user?.name}/${uniquekey}`)
        .send({
          image_url: "hehe",
        });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user gallery picture is external picture but user want to change it to uploaded picture", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        });

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be contains owner data", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data should be contains old picture data field", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.old_data).toBeDefined();
    expect(request.body.data.old_data).not.toBeUndefined();
    expect(request.body.data.old_data).not.toBeNull();
  });
  test("returned response data should be contains updated picture data field", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
  });
  test("returned response data updated picture data field must be contains updated image url", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data.url).toBeDefined();
    expect(request.body.data.updated_data.url).not.toBeUndefined();
    expect(request.body.data.updated_data.url).not.toBeNull();
    expect(request.body.data.updated_data.url).toBe(dummyExternalPictureUrl);
    expect(request.body.data.updated_data.url).toMatch(dummyExternalPictureUrl);
  });
  test("returned response data old picture data field must be contains old image url", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.old_data.url).toBeDefined();
    expect(request.body.data.old_data.url).not.toBeUndefined();
    expect(request.body.data.old_data.url).not.toBeNull();
    expect(request.body.data.old_data.url).toBe(userGallery.pictures[0].url);
    expect(request.body.data.old_data.url).toMatch(userGallery.pictures[0].url);
  });
  test("returned response data should be contains owner data and match user data", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        })
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
  test("should be return 400 status code if the picture is internal picture but user want to switch it to external picture", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
          image_url: dummyExternalPictureUrl,
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 status code if the updated field is not included request file picture", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        });

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be included owner field data", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data should be included old_data picture field data", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.old_data).toBeDefined();
    expect(request.body.data.old_data).not.toBeUndefined();
    expect(request.body.data.old_data).not.toBeNull();
  });
  test("returned response data should be included updated_data picture field", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
  });
  test("returned owner field response data should be match with user object", async () => {
    const user: Awaited<User | null> = await getTestUser(4);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .send({
          title: "tesssettt",
        })
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
  test("should be return 400 if user trying to update internal picture data with uploaded file but the request files field name is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("pictures", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 if the picture extension is not supported", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.sgi")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 if the user plan is none but want to update the picture", async () => {
    const user: Awaited<User | null> = await getTestUser(898);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 if the user plan is none but want to update the picture by link", async () => {
    const user: Awaited<User | null> = await getTestUser(898);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
          description: "testt",
          image_url: "tefjsha",
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 if the picture file size is more than 30mb when the user plan is Gold", async () => {
    const user: Awaited<User | null> = await getTestUser(5);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/40mb.png")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 if the picture file size is more than 60mb when the user plan is Diamond", async () => {
    const user: Awaited<User | null> = await getTestUser(2);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/85mb.png")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 if the picture file size is more than 80mb when the user plan is Netherite", async () => {
    const user: Awaited<User | null> = await getTestUser(8);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/85mb.png")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 if the picture file size is more than 15mb when the user plan is Netherite but inactive", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/20mb.png")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 200 if the user want to update picture data with uploaded picture", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be included owner data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data owner field must be match user object data", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
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
  test("returned response data must be included old_data field", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.old_data).toBeDefined();
    expect(request.body.data.old_data).not.toBeUndefined();
    expect(request.body.data.old_data).not.toBeNull();
  });
  test("returned response data must be included updated_data field", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.updated_data).toBeDefined();
    expect(request.body.data.updated_data).not.toBeUndefined();
    expect(request.body.data.updated_data).not.toBeNull();
  });
});

describe("Verify User Client Keys - Unit-test Update User Gallery Picture API Endpoint", () => {
  test("should be return 401 status code if the client id and client secret is not provided", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/plxm/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the client id is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/plxm/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}?client_id=1payload.providerId28&client_secret=182`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the client keys is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/plxm/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}?client_id=pxlmid-1829&client_secret=182`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("API Grant Access - Unit-test Update User Gallery Picture API Endpoint", () => {
  test("should be return 422 status code if user plan is none", async () => {
    const user: Awaited<User | null> = await getTestUser(898);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/plxm/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if user plan is deactive", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Response | supertest.Request> =
      await supertest(app)
        .patch(
          `/v1/plxm/pictures/${user?.name}/${userGallery.pictures[0].uniquekey}?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .field({
          title: "tesssettt",
        })
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
});
