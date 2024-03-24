import { Test } from "@nestjs/testing";
import { UserModule } from "../user.module";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorService } from "@/common/error.service";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { User } from "@prisma/client";
import { MockData } from "@/common/mock.service";
import { RetrieveUserResponseDto } from "../dtos/retrieve-user.dto";

describe("User Controller (e2e)", () => {
  let app: INestApplication;
  let errorService: ErrorService;
  let mockDataService: MockData;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule, LibsModule, CommonModule],
    }).compile();

    app = module.createNestApplication();
    errorService = module.get<ErrorService>(ErrorService);
    mockDataService = module.get<MockData>(MockData);
    await app.init();
  });

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
});
