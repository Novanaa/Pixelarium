import { Test, TestingModule } from "@nestjs/testing";
import { AuthModule } from "../auth.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import * as supertest from "supertest";
import { HttpStatus, INestApplication } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import * as cookieParser from "cookie-parser";
import { UserInfoProvider } from "../providers";
import { User } from "@prisma/client";
import { UserInfoGenerateCredentials } from "../providers/userinfo/userinfo";
import { TokenizerResponseDto } from "../providers/tokenizer/tokenizer.dto";
import { AuthConstant } from "@/constant/auth.constant";

describe("Auth Controller (e2e)", () => {
  let app: INestApplication;
  let testLifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;
  let userinfoService: UserInfoProvider;
  let mockDataService: MockDataProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [AuthModule, LibsModule, CommonModule, TestModule],
    }).compile();

    app = module.createNestApplication();
    testLifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);
    userinfoService = module.get<UserInfoProvider>(UserInfoProvider);
    mockDataService = module.get<MockDataProvider>(MockDataProvider);

    app.use(cookieParser());

    await app.init();
    await testLifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    testLifecycle.cleanUpDirectory();
    await testLifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /auth/tokenizer", () => {
    it("should be throw unauthorized exception error response", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.unauthorized());
    });
    it("should be return 401 status code if the session cookies is not setted", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toEqual(HttpStatus.UNAUTHORIZED);
      expect(response.status).toEqual(HttpStatus.UNAUTHORIZED);
    });
    it("status response should be 'KO' if the session cookies is not setted", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/auth/tokenizer");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw forbidden exception error response if the session cookies is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(errorService.forbidden());
    });
    it("should be return 403 status code if the session cookies is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.FORBIDDEN);
      expect(response.status).toBe(HttpStatus.FORBIDDEN);
    });
    it("status response should be 'KO' if the session cookies is invalid", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken);
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken);
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.status).toBe("OK");
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.status).toBe("OK");
    });
    it("user credentials response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.credentials).toBeDefined();
    });
    it("user credentials access_token response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.credentials.access_token).toBeDefined();
    });
    it("user credentials expires_in response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(body.credentials.expires_in).toBeDefined();
    });
    it("user credentials expires_in response data should be a number", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(typeof body.credentials.expires_in).toBe("number");
    });
    it("user credentials access_token response data should be a string", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(typeof body.credentials.access_token).toBe("string");
    });
    it("user credentials access_token response data should be a jwt", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/auth/tokenizer")
          .set("Cookie", "session=" + credentials.refreshToken)
          .set("Content-Type", "application/json");
      const body: TokenizerResponseDto = response.body as TokenizerResponseDto;

      expect(
        AuthConstant.JWT_PARTTERN.test(body.credentials.access_token)
      ).toBe(true);
    });
  });
});
