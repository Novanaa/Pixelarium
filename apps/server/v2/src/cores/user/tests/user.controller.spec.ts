import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "../user.controller";
import { RetrieveUserService } from "../services/retrieve-user.service";
import { CommonModule } from "@/common/common.module";
import { ErrorService } from "@/common/error.service";
import { LibsModule } from "@/libs/libs.module";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { MockData } from "@/common/mock.service";
import { User } from "@prisma/client";
import { RetrieveUserResponseDto } from "../dtos/retrieve-user.dto";

describe("User Controller", () => {
  let controller: UserController;
  let errorService: ErrorService;
  let mockData: MockData;

  beforeEach(async () => {
    const app: Awaited<TestingModule> = await Test.createTestingModule({
      controllers: [UserController],
      providers: [RetrieveUserService],
      imports: [CommonModule, LibsModule],
    }).compile();

    controller = app.get<UserController>(UserController);
    errorService = app.get<ErrorService>(ErrorService);
    mockData = app.get<MockData>(MockData);
  });

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
});
