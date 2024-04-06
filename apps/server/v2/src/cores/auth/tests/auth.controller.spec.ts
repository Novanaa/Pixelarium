import {
  GithubAuthProvider,
  GoogleAuthProvider,
  LogoutProvider,
  TokenizerProvider,
  UserInfoProvider,
} from "../providers";
import { Request, Response } from "express";
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
import { ResponseError } from "@/model/error.model";
import { UserInfoGenerateCredentials } from "../providers/userinfo/userinfo";
import { LogoutUserResponseDto } from "../providers/logout/logout.dto";
import { jwtDecode } from "jwt-decode";
import { ClientKeysModule } from "@/cores/client-keys/client-keys.module";

describe("AuthController", () => {
  let controller: AuthController;
  let errorService: ErrorProvider;
  let userinfoService: UserInfoProvider;
  let mockDataService: MockDataProvider;
  let lifecycleService: LifecycleProvider;
  let prisma: PrismaProvider;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        LibsModule,
        UserModule,
        CommonModule,
        TestModule,
        ClientKeysModule,
      ],
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

  describe("POST /auth/logout", () => {
    it("should be throw unauthorized error response if the cookies is empty", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest();
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;

        expect(err.getResponse()).toEqual(errorService.unauthorized());
      }
    });
    it("status response should be 'KO' if the cookies is empty", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest();
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 401 status code if the cookies is empty", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest();
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;
        const statusCode: number = err.getStatus();

        expect(response.code).toBe(HttpStatus.UNAUTHORIZED);
        expect(statusCode).toBe(HttpStatus.UNAUTHORIZED);
      }
    });
    it("should be return 401 status code if the session cookies is undefined", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            "x-name": "john_doe",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;
        const statusCode: number = err.getStatus();

        expect(response.code).toBe(HttpStatus.UNAUTHORIZED);
        expect(statusCode).toBe(HttpStatus.UNAUTHORIZED);
      }
    });
    it("status response should be return 'KO' if the session cookies is undefined", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            "x-name": "john_doe",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be throw unauthorized error response if the session cookies is undefined", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            "x-name": "john_doe",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.unauthorized());
      }
    });
    it("should be return 403 status code if the user credentials is invalid", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            session: "test",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;
        const statusCode: number = err.getStatus();

        expect(response.code).toBe(HttpStatus.FORBIDDEN);
        expect(statusCode).toBe(HttpStatus.FORBIDDEN);
      }
    });
    it("status response should be 'KO' if the user credentials is invalid", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            session: "test",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be throw forbidden error response if the user credentials is invalid", () => {
      try {
        const request: httpMock.MockRequest<Request> = httpMock.createRequest({
          cookies: {
            session: "test",
          },
        });
        const response: httpMock.MockResponse<Response> =
          httpMock.createResponse();

        controller.logoutUser(request, response);
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.forbidden("Invalid user credentials information!")
        );
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(logoutUser.code).toBe(HttpStatus.OK);
      expect(response._getStatusCode()).toBe(HttpStatus.OK);
    });
    it("status response data should be 'OK'", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(logoutUser.status).toBe("OK");
    });
    it("logouted_user response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(logoutUser.logouted_user).toBeDefined();
    });
    it("removed_cookies response data should be defined", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(logoutUser.removed_cookies).toBeDefined();
    });
    it("removed_cookies response data should be match to list of deleted cookies", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(logoutUser.removed_cookies).toEqual([
        "session",
        "logged_as",
        "logged_in",
      ]);
    });
    it("logouted_user response data should be match to decoded user", async () => {
      const user: Awaited<User> = await mockDataService.getRandomser();
      const credentials: UserInfoGenerateCredentials =
        userinfoService.generateCredentials(user);
      const cookies = {
        session: credentials.refreshToken,
      };
      const request: httpMock.MockRequest<Request> = httpMock.createRequest({
        cookies,
      });
      const response: httpMock.MockResponse<Response> =
        httpMock.createResponse();

      const decodedUser: User = jwtDecode(credentials.refreshToken);

      const logoutUser: LogoutUserResponseDto = controller.logoutUser(
        request,
        response
      );

      expect(JSON.stringify(logoutUser.logouted_user)).toMatch(
        JSON.stringify(decodedUser)
      );
    });
  });
});
