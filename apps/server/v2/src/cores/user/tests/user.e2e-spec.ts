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

describe("User Controller (e2e)", () => {
  let app: INestApplication;
  let errorService: ErrorProvider;
  let mockDataService: MockDataProvider;
  let prisma: PrismaProvider;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule, LibsModule, CommonModule],
    }).compile();

    app = module.createNestApplication();
    errorService = module.get<ErrorProvider>(ErrorProvider);
    mockDataService = module.get<MockDataProvider>(MockDataProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await app.init();
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
          .get("/user/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.status).toBe("OK");
    });
    it("should be return user data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/user/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user).toBeDefined();
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/user/" + user.name)
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
          .get("/user/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user.email).toBeUndefined();
    });
    it("user data response should be not included password field", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/user/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserResponseDto =
        response.body as RetrieveUserResponseDto;

      expect(body.user.password).toBeUndefined();
    });
    it("user data response should be equal to requested user data", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/user/" + user.name)
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
          .delete("/user/" + user.name)
          .set("Content-Type", "application/json");
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.status).toBe("OK");
    });
    it("deleted user response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user).toBeDefined();
    });
    it("deleted user response data should be not included email field data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user.email).toBeUndefined();
    });
    it("deleted user response data should be not included password field data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      expect(body.deleted_user.password).toBeUndefined();
    });
    it("deleted user response data should be match to requested user data", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const body: DeleteUserResponseDto =
        response.body as DeleteUserResponseDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.deleted_user)).toMatch(JSON.stringify(user));
    });
    it("requested user should be deleted", async () => {
      const user: Awaited<User> = await mockDataService.createRandomUser();
      await supertest(app.getHttpServer()).delete("/user/" + user.name);
      const searchUser: Awaited<User> = await prisma.user.findUnique({
        where: { name: user.name },
      });

      expect(searchUser).toBeNull();
    });
  });
});
