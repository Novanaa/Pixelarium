import {
  GithubAuthProvider,
  GoogleAuthProvider,
  LogoutProvider,
  TokenizerProvider,
  UserInfoProvider,
} from "../providers";
import { Request } from "express";
import * as httpMock from "node-mocks-http";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "../auth.controller";
import { LibsModule } from "@/libs/libs.module";
import { UserModule } from "@/cores/user/user.module";
import { CommonModule } from "@/common/common.module";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { User } from "@prisma/client";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";

describe("AuthController", () => {
  let controller: AuthController;
  let errorService: ErrorProvider;
  let userinfoService: UserInfoProvider;
  let mockDataService: MockDataProvider;
  let lifecycleService: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LibsModule, UserModule, CommonModule, TestModule],
      controllers: [AuthController],
      providers: [
        GithubAuthProvider,
        GoogleAuthProvider,
        UserInfoProvider,
        LogoutProvider,
        TokenizerProvider,
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    errorService = module.get<ErrorProvider>(ErrorProvider);
    userinfoService = module.get<UserInfoProvider>(UserInfoProvider);
    mockDataService = module.get<MockDataProvider>(MockDataProvider);
    lifecycleService = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);

    await lifecycleService.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycleService.cleanUpDirectory();
    await lifecycleService.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /auth/tokenizer", () => {
    it("should be throw unauthorized exception error if the user credentials is undefined", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          baseUrl: "/auth/tokenizer",
        });

        controller.tokenizer(request);
      } catch (error) {
        const err: HttpException = error as HttpException;

        expect(err.getResponse()).toEqual(errorService.unauthorized());
      }
    });
    it("should be throw forbidden exception error if the user credentials is invalid", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          baseUrl: "/auth/tokenizer",
          cookies: {
            session: "test",
          },
        });

        controller.tokenizer(request);
      } catch (error) {
        const err: HttpException = error as HttpException;

        expect(err.getResponse()).toEqual(errorService.forbidden());
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(controller.tokenizer(request).code).toBe(HttpStatus.OK);
    });
    it("status response data should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(controller.tokenizer(request).status).toBe("OK");
    });
    it("status response data should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(controller.tokenizer(request).status).toBe("OK");
    });
    it("credentials response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(controller.tokenizer(request).credentials).toBeDefined();
    });
    it("access token credentials response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(
        controller.tokenizer(request).credentials.access_token
      ).toBeDefined();
    });
    it("expires time credentials response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(
        controller.tokenizer(request).credentials.expires_in
      ).toBeDefined();
    });
    it("expires time credentials response data should be a number", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(typeof controller.tokenizer(request).credentials.expires_in).toBe(
        "number"
      );
    });
    it("user access token credentials response data should be a string", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        baseUrl: "/auth/tokenizer",
        cookies: {
          session: userinfoService.generateCredentials(user).refreshToken,
        },
      });

      expect(
        typeof controller.tokenizer(request).credentials.access_token
      ).toBe("string");
    });
  });
});
