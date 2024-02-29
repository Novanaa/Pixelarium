import { describe, test, expect } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import getTestUser from "../../../../tests/utils/getTestUser";
import {
  ClientKey,
  User,
} from "../../../../../packages/prisma/generated/client";
import payload from "../../../../tests/const/payload";
import getTestUserClientKeys from "../../../../tests/utils/getTestUserClientKeys";
import dummyExternalPictureUrl from "../../../../const/readonly/dummyExternalPictureUrl";

describe("Unit-Test User Pictures Upload Management API Endpoint", () => {
  test("should be return 422 status code if the request body payload is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          hehe: "huhu",
        });

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
          picture_details: {
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
          picture_details: {
            title: "test",
            description: "test",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user is not found", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/.../upload`)
        .send({
          picture_details: {
            title: "test",
            description: "test",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the request file field name is invalid", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("pictures", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the use_external_image_url field is setted to true but user uploads a file", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .field("use_external_image_url", true)
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the uploaded picture file extension is not supported", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(payload.providerId);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.sgi");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the picture file size is more than 15mb while the user plan is none", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(898);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/20mb.png");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the picture file size is more than 30mb while the user plan is gold", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(1);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/40mb.png");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the picture file size is more than 60mb while the user plan is diamond", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(2);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/85mb.png");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the picture file size is more than 15mb while the user plan is netherite but the user plan is deactivated", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(123);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/40mb.png");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the picture file size is more than 80mb while the user plan is netherite", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/85mb.png");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif")
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data should be included inserted_data field", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data).toBeDefined();
    expect(request.body.data.inserted_data).not.toBeUndefined();
    expect(request.body.data.inserted_data).not.toBeNull();
  });
  test("returned response data should be included owner data field", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data should be included inserted field", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted).toBeDefined();
    expect(request.body.data.inserted).not.toBeUndefined();
    expect(request.body.data.inserted).not.toBeNull();
    expect(request.body.data.inserted).toBeBoolean();
    expect(request.body.data.inserted).toBe(true);
  });
  test("inserted_data response data must be included url data field", async () => {
    const pictureDetails = {
      title: "test",
      description: "test",
    };
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .field("picture_details", JSON.stringify(pictureDetails))
        .attach("picture", "./public/img/test/test.avif");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.url).toBeDefined();
    expect(request.body.data.inserted_data.url).not.toBeUndefined();
    expect(request.body.data.inserted_data.url).not.toBeNull();
    expect(request.body.data.inserted_data.url).toBeString();
  });
  test("should be return 400 status code if the request body is empty", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/pictures/${user?.name}/upload`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the external image url is not a valid url", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: "hehhe",
          },
        });

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201 status code", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        });

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure returned response data includes owner data", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("make sure returned response data includes inserted_data field", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data).toBeDefined();
    expect(request.body.data.inserted_data).not.toBeUndefined();
    expect(request.body.data.inserted_data).not.toBeNull();
  });
  test("make sure returned response data includes inserted_data url field must be contains a string of external url picture", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.url).toBeDefined();
    expect(request.body.data.inserted_data.url).not.toBeUndefined();
    expect(request.body.data.inserted_data.url).not.toBeNull();
    expect(request.body.data.inserted_data.url).toBeString();
    expect(request.body.data.inserted_data.url).toMatch(
      dummyExternalPictureUrl
    );
    expect(request.body.data.inserted_data.url).toBe(dummyExternalPictureUrl);
  });
  test("make sure returned response data includes inserted field", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted).toBeDefined();
    expect(request.body.data.inserted).not.toBeUndefined();
    expect(request.body.data.inserted).not.toBeNull();
    expect(request.body.data.inserted).toBeBoolean();
    expect(request.body.data.inserted).toBe(true);
  });
});

describe("Verify Client Keys - Unit-Test User Pictures Upload Management API Endpoint", () => {
  test("should be return 401 status code if the client_id and client_secret is no provided", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(`/v1/plxm/pictures/${user?.name}/upload`)
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(401);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the client_id is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=16272&client_secret=1728`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the client keys is invalid", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=1728`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
});

describe("API Grant Access - Unit-Test User Pictures Upload Management API Endpoint", () => {
  test("should be return 422 status code if the user plan is none", async () => {
    const user: Awaited<User | null> = await getTestUser(898);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 422 status code if the user plan is netherite but the status is deactivated", async () => {
    const user: Awaited<User | null> = await getTestUser(123);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(422);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 201", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        });

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
  });
  test("returned response data must be contains owner data field", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.owner).toBeDefined();
    expect(request.body.data.owner).not.toBeUndefined();
    expect(request.body.data.owner).not.toBeNull();
  });
  test("returned response data must be contains inserted_data field", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data).toBeDefined();
    expect(request.body.data.inserted_data).not.toBeUndefined();
    expect(request.body.data.inserted_data).not.toBeNull();
  });
  test("returned response data must be contains inserted field", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted).toBeDefined();
    expect(request.body.data.inserted).not.toBeUndefined();
    expect(request.body.data.inserted).not.toBeNull();
    expect(request.body.data.inserted).toBe(true);
    expect(request.body.data.inserted).toBeBoolean();
  });
  test("returned response data inserted_data field must be contains url data", async () => {
    const user: Awaited<User | null> = await getTestUser(321);
    const userClientKeys: Awaited<ClientKey | null> =
      await getTestUserClientKeys(user?.id || 0);
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app)
        .post(
          `/v1/plxm/pictures/${user?.name}/upload?client_id=${userClientKeys?.client_id}&client_secret=${userClientKeys?.client_secret}`
        )
        .send({
          use_external_image_url: true,
          picture_details: {
            title: "test",
            description: "test",
            image_url: dummyExternalPictureUrl,
          },
        })
        .set("Content-Type", "application/json");

    console.log(request.body);
    expect(request.status).toBe(201);
    expect(request.body.status).toBe("OK");
    expect(request.body.data.inserted_data.url).toBeDefined();
    expect(request.body.data.inserted_data.url).not.toBeUndefined();
    expect(request.body.data.inserted_data.url).not.toBeNull();
    expect(request.body.data.inserted_data.url).toBe(dummyExternalPictureUrl);
    expect(request.body.data.inserted_data.url).toMatch(
      dummyExternalPictureUrl
    );
    expect(request.body.data.inserted_data.url).toBeString();
  });
});
