import { UserModule } from "@/cores/user/user.module";
import { Test, TestingModule } from "@nestjs/testing";
import { ClientKeysModule } from "../client-keys.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import { PrismaProvider } from "@/libs/providers";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { User } from "@prisma/client";
import { RetrieveUserClientCredentialsKeysResponseDto } from "../providers/retrieve-credentials/retrieve-credentials.dto";

describe("ClientKeys (e2e)", () => {
  let app: INestApplication;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;
  let mockData: MockDataProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        ClientKeysModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
    }).compile();

    app = module.createNestApplication();
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    error = module.get<ErrorProvider>(ErrorProvider);
    mockData = module.get<MockDataProvider>(MockDataProvider);

    await app.init();
    await lifecycle.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  describe("GET /client-keys/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/client-keys/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/client-keys/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/client-keys/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/client-keys/" + user.name);
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.status).toBe("OK");
    });
    it("credentials_keys response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.credentials_keys).toBeDefined();
    });
    it("credentials_keys client_id response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.credentials_keys.client_id).toBeDefined();
    });
    it("credentials_keys client_secret response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(body.credentials_keys.client_secret).toBeDefined();
    });
    it("credentials_keys client_secret response data should be typeof string", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(typeof body.credentials_keys.client_secret).toBe("string");
    });
    it("credentials_keys client_id response data should be typeof string", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/client-keys/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserClientCredentialsKeysResponseDto =
        response.body as RetrieveUserClientCredentialsKeysResponseDto;

      expect(typeof body.credentials_keys.client_id).toBe("string");
    });
  });
});
