import { describe, test, expect } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import uniquekey from "../../../../const/readonly/pictureUniquekeyExample";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import getTestUser from "../../../../tests/utils/getTestUser";
import payload from "../../../../tests/const/payload";
import getUserGallery, {
  UserGallery,
} from "../../galleries/services/getUserGallery";

describe("Unit-test Add User Picture Embed Links API Endpoint", () => {
  test("should be return 400 status code if the picture uniquekey is invalid", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/embed-links/0/123`);

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/embed-links/0/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 404 status code if the picture doesn't exist", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(`/v1/embed-links/${user?.name}/${uniquekey}`);

    console.log(request.body);
    expect(request.status).toBe(404);
    expect(request.body.status).toBe("KO");
  });
  test("should be return 400 status code if the picture is a private picture", async () => {
    const user: Awaited<UserWithOptionalChaining | null> = await getTestUser(
      payload.providerId
    );
    const userGallery: Awaited<UserGallery | null> = await getUserGallery(
      user?.id || 0
    );
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app).post(
        `/v1/embed-links/${user?.name}/${userGallery.pictures[0].uniquekey}`
      );

    console.log(request.body);
    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
});
