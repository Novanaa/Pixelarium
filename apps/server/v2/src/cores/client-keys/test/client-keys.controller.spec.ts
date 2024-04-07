import { Test, TestingModule } from "@nestjs/testing";
import { ClientKeysController } from "../client-keys.controller";
import { LibsModule } from "@/libs/libs.module";
import { TestModule } from "../../../../test/test.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { ClientKeysModule } from "../client-keys.module";
import {
  CredentialsProvider,
  RetrieveUserClientCredentialsKeysProvider,
} from "../providers";
import { PrismaProvider } from "@/libs/providers";
import { LifecycleProvider } from "../../../../test/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { RetrieveUserClientCredentialsKeysResponseDto } from "../providers/retrieve-credentials/retrieve-credentials.dto";
import { User } from "@prisma/client";

describe("ClientKeysController", () => {
  let controller: ClientKeysController;
  let prisma: PrismaProvider;
  let lifecycle: LifecycleProvider;
  let errorService: ErrorProvider;
  let mockData: MockDataProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        TestModule,
        CommonModule,
        UserModule,
        ClientKeysModule,
      ],
      controllers: [ClientKeysController],
      providers: [
        CredentialsProvider,
        RetrieveUserClientCredentialsKeysProvider,
      ],
    }).compile();

    controller = module.get<ClientKeysController>(ClientKeysController);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);
    mockData = module.get<MockDataProvider>(MockDataProvider);

    await lifecycle.ModuleTestInit();
  });

  afterEach(async () => await prisma.$disconnect());

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  describe("GET /client-keys/:name", () => {
    it("should be throw not found exception error response if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserClientCredentialsKeys("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserClientCredentialsKeys("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserClientCredentialsKeys("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(response.status).toBe("OK");
    });
    it("credentials_keys response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(response.credentials_keys).toBeDefined();
    });
    it("credentials_keys client_id response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(response.credentials_keys.client_id).toBeDefined();
    });
    it("credentials_keys client_secret response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(response.credentials_keys.client_secret).toBeDefined();
    });
    it("credentials_keys client_secret response data should be a string", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      expect(typeof response.credentials_keys.client_secret).toBe("string");
    });
    it("credentials_keys client_id response data should be a string", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserClientCredentialsKeysResponseDto> =
        await controller.retrieveUserClientCredentialsKeys(user.name);

      console.log(response);
      expect(typeof response.credentials_keys.client_id).toBe("string");
    });
  });
});
