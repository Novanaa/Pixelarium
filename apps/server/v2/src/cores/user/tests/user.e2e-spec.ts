import { Test } from "@nestjs/testing";
import { UserModule } from "../user.module";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers/error/error.provider";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { User } from "@prisma/client";
import { MockDataProvider } from "@/common/providers/mock-data/mock.provider";
import { RetrieveUserResponseDto } from "../providers/retrieve-user/retrieve-user.dto";
import { PrismaProvider } from "@/libs/providers";
import { DeleteUserResponseDto } from "../providers/delete-user/delete-user.dto";
import { UpdateUserResponsetDto } from "../providers/update-user/update-user.dto";
import { PictureConstant } from "@/constant/picture.constant";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { Environment } from "@/configs/readonly";

describe("User Controller (e2e)", () => {
  let app: INestApplication;
  let errorService: ErrorProvider;
  let mockDataService: MockDataProvider;
  let prisma: PrismaProvider;
  let lifecycle: LifecycleProvider;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule, LibsModule, CommonModule, TestModule],
    }).compile();

    app = module.createNestApplication();
    errorService = module.get<ErrorProvider>(ErrorProvider);
    mockDataService = module.get<MockDataProvider>(MockDataProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);

    await app.init();
    await lifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /user/:name", () => {
    it("should be return not found exeption when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.notFound());
    });
    it("should be return 404 when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(response.status).toBe(HttpStatus.NOT_FOUND);
      expect(body.code).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be accept application/json", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.status).toBe("OK");
    });
    it("should be return user data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user).toBeDefined();
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("user data response should be not included email field", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user.email).toBeUndefined();
    });
    it("user data response should be not included password field", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user.password).toBeUndefined();
    });
    it("user data response should be equal to requested user data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.user)).toBe(JSON.stringify(user));
    });
  });

  describe("DELETE /user/:name", () => {
    it("should be return not found exeption when the user doens't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.notFound());
    });
    it("should be return 404 when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(response.status).toBe(HttpStatus.NOT_FOUND);
      expect(body.code).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be accept application/json", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .delete(encodeURI("/user/" + user.name))
          .set("Content-Type", "application/json");
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.status).toBe("OK");
    });
    it("deleted user response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user).toBeDefined();
    });
    it("deleted user response data should be not included email field data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user.email).toBeUndefined();
    });
    it("deleted user response data should be not included password field data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user.password).toBeUndefined();
    });
    it("deleted user response data should be match to requested user data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete(
          encodeURI("/user/" + user.name)
        );
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.deleted_user)).toMatch(JSON.stringify(user));
    });
    it("requested user should be deleted", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      await supertest(app.getHttpServer()).delete(
        encodeURI("/user/" + user.name)
      );
      const searchUser: Awaited<User> = await prisma.user.findUnique({
        where: { name: user.name },
      });

      expect(searchUser).toBeNull();
    });
  });

  describe("PATCH /user/:name", () => {
    it("should be return not found exeption when the user doens't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.notFound());
    });
    it("should be return 404 when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(response.status).toBe(HttpStatus.NOT_FOUND);
      expect(body.code).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' when the user doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch("/user/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request execption when the request payload is empty", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch(
          encodeURI("/user/" + user.name)
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The request you made is missing the required request body. Please provide the necessary data in the request body to proceed."
        )
      );
    });
    it("should be return 400 status code when the request payload is empty", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).patch(
          encodeURI("/user/" + user.name)
        );
      const body: ResponseError = response.body as ResponseError;

      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw forbidden execption when the request payload is invalid", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            test: "hehe",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.TypeError).toBe(errorService.forbidden().TypeError);
    });
    it("should be 403 status code when the request payload is invalid", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            test: "hehe",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.FORBIDDEN);
      expect(response.status).toBe(HttpStatus.FORBIDDEN);
    });
    it("should be throw forbidden execption when the request payload data type is invalid", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: 1,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.TypeError).toBe(errorService.forbidden().TypeError);
    });
    it("should be return 403 status code when the request payload data type is invalid", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: 1,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.FORBIDDEN);
      expect(response.status).toBe(HttpStatus.FORBIDDEN);
    });
    it("should be throw bad request execption when the username has already taken", async () => {
      const createUser: Awaited<User> =
        await mockDataService.createRandomUser();
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: createUser.name,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The name is already taken, please choose another name!"
        )
      );
    });
    it("should be return 400 status code when the username has already taken", async () => {
      const createUser: Awaited<User> =
        await mockDataService.createRandomUser();
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: createUser.name,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' when the username has already taken", async () => {
      const createUser: Awaited<User> =
        await mockDataService.createRandomUser();
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: createUser.name,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request execption while the username is contains uppercase letter", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: "TEST",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("should be throw bad request execption while the username is contains uppercase with lowercase letter", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: "Test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("should be throw bad request execption while the username is contains symbol", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: "@test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("should be throw bad request execption while the username is contains whitespace", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: "test test",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("should be throw bad request execption while the username is more than 64 in letters", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: Environment.JSONWEBTOKEN.ACCESS_TOKEN,
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("should be throw bad request execption while the username is constains number", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: "test123",
          });
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
        )
      );
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          })
          .set("Content-Type", "application/json");
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("response status should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.status).toBe("OK");
    });
    it("response data updated_user should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user).toBeDefined();
    });
    it("response data updated_user should be match to requested user", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.updated_user)).toMatch(JSON.stringify(user));
    });
    it("response data updated_user should not contains email field data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user.email).toBeUndefined();
    });
    it("response data updated_user should not contains password field data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user.password).toBeUndefined();
    });
    it("response data updated_field should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send({
            name: mockDataService.generateRandomUser().name,
          });
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_field).toBeDefined();
    });
    it("response data updated_field should be constains updated data field", async () => {
      const payload = {
        name: mockDataService.generateRandomUser().name,
      };
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .send(payload);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_field).toEqual(payload);
    });
    it("should be throw unprocessable entity execption if the avatar wasn't a picture", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH.json);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.unprocessableEntity(
          "The avatar provided is not in a valid format. Please ensure the avatar image is in an accepted format (e.g., JPEG, PNG) and try again."
        )
      );
    });
    it("should be return 422 status code if the avatar wasn't a picture", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH.json);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
    });
    it("should be throw bad request execption if the avatar file size is more than 1mb", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["20mb"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The avatar you are trying to upload exceeds the maximum allowed file size. Please ensure that the file size is within 1mb."
        )
      );
    });
    it("should be return 400 status code if the avatar file size is more than 1mb", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["20mb"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be return 400 status code if the avatar file extension is not supported", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["sgi"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("should be throw bad request execption if the avatar file extension is not supported", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["sgi"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.badRequest(
          "The picture extension is not supported. Please upload an image with a valid extension (e.g., JPG, PNG, AVIF, SVG)."
        )
      );
    });
    it("should be throw forbidden execption if the avatar file extension is not supported", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["broken"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        errorService.forbidden(
          "The picture you are trying to access is either missing or corrupted."
        )
      );
    });
    it("should be return 403 status code if the avatar file extension is not supported", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["broken"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.FORBIDDEN);
      expect(response.status).toBe(HttpStatus.FORBIDDEN);
    });
    it("should be accept application/json", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"])
          .set("Content-Type", "application/json");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("response data updated_user should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user).toBeDefined();
    });
    it("response data updated_user should be not included email field data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user.email).toBeUndefined();
    });
    it("response data updated_user should be not included password field data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_user.password).toBeUndefined();
    });
    it("response data updated_user should be match to requested user data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.updated_user)).toMatch(JSON.stringify(user));
    });
    it("response data updated field should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_field).toBeDefined();
    });
    it("response data updated field should be contains avatar field", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_field.avatar).toBeDefined();
    });
    it("response data updated field should be contains name field", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .patch(encodeURI("/user/" + user.name))
          .field("name", mockDataService.generateRandomUser().name)
          .attach("avatar", PictureConstant.DUMMY_PICTUREPATH["jpeg"]);
      const body: UpdateUserResponsetDto =
        response.body as UpdateUserResponsetDto;

      expect(body.updated_field.name).toBeDefined();
    });
  });
});
