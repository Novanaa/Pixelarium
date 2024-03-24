import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "../user.controller";
import { RetrieveUserProvider } from "../providers/retrieve-user/retrieve-user.provider";
import { CommonModule } from "@/common/common.module";
import { ErrorProvider } from "@/common/providers/error/error.provider";
import { LibsModule } from "@/libs/libs.module";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { MockDataProvider } from "@/common/providers/mock-data/mock.provider";
import { User } from "@prisma/client";
import { RetrieveUserResponseDto } from "../providers/retrieve-user/retrieve-user.dto";
import { DeleteUserProvider } from "../providers/delete-user/delete-user.provider";
import { DeleteUserResponseDto } from "../providers/delete-user/delete-user.dto";
import { PrismaProvider } from "@/libs/providers";

describe("User Controller", () => {
  let controller: UserController;
  let errorService: ErrorProvider;
  let mockData: MockDataProvider;
  let prisma: PrismaProvider;
  let retrieveUser: RetrieveUserProvider;

  beforeEach(async () => {
    const app: Awaited<TestingModule> = await Test.createTestingModule({
      controllers: [UserController],
      providers: [RetrieveUserProvider, DeleteUserProvider],
      imports: [CommonModule, LibsModule],
    }).compile();

    controller = app.get<UserController>(UserController);
    errorService = app.get<ErrorProvider>(ErrorProvider);
    mockData = app.get<MockDataProvider>(MockDataProvider);
    prisma = app.get<PrismaProvider>(PrismaProvider);
    retrieveUser = app.get<RetrieveUserProvider>(RetrieveUserProvider);
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /user/:name", () => {
    it("should be return not found exeption when the user doens't exist", async () => {
      try {
        await controller.retrieveUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code when the user doens't exist", async () => {
      try {
        await controller.retrieveUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response error should be 'KO' when the user doesn't exist", async () => {
      try {
        await controller.retrieveUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: RetrieveUserResponseDto = await controller.retrieveUser(
        user.name
      );

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("should be return user data", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: RetrieveUserResponseDto = await controller.retrieveUser(
        user.name
      );

      expect(response.user).toBeDefined();
    });
    it("user data should be not included email field", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: RetrieveUserResponseDto = await controller.retrieveUser(
        user.name
      );

      expect(response.user.email).toBeUndefined();
    });
    it("user data should be not included password field", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: RetrieveUserResponseDto = await controller.retrieveUser(
        user.name
      );

      expect(response.user.password).toBeUndefined();
    });
    it("user data should be match with requested user data", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: RetrieveUserResponseDto = await controller.retrieveUser(
        user.name
      );

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.user)).toMatch(JSON.stringify(user));
    });
  });

  describe("DELETE /user:name", () => {
    it("should be return not found exeption when the user doens't exist", async () => {
      try {
        await controller.deleteUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code when the user doens't exist", async () => {
      try {
        await controller.deleteUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response error should be 'KO' when the user doesn't exist", async () => {
      try {
        await controller.deleteUser("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("should be return deleted_user data field", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      expect(response.deleted_user).toBeDefined();
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      expect(response.status).toBe("OK");
    });
    it("deleted user data field should be not included email field", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      expect(response.deleted_user.email).toBeUndefined();
    });
    it("deleted user data field should be not included password field", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      expect(response.deleted_user.password).toBeUndefined();
    });
    it("requested user should be match with the response user", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      const response: Awaited<DeleteUserResponseDto> =
        await controller.deleteUser(user.name);

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.deleted_user)).toMatch(
        JSON.stringify(user)
      );
    });
    it("the requested user should be deleted", async () => {
      const user: Awaited<User> = await mockData.createRandomUser();
      await controller.deleteUser(user.name);
      const isUserDeleted: Awaited<User> =
        await retrieveUser.retrieveUserByName(user.name);

      expect(isUserDeleted).toBeNull();
    });
  });
});
