import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { FavoritePictureController } from "../favorite-picture.controller";
import { UserModule } from "@/cores/user/user.module";
import { FavoritePictureModule } from "../favorite-picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { RetrieveUserFavoritesPicturesResponseDto } from "../providers/retrieve-favorites/retrieve-favotires.dto";
import { User } from "@prisma/client";

describe("FavoritePictureController", () => {
  let controller: FavoritePictureController;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;
  let mockData: MockDataProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        FavoritePictureModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
      controllers: [FavoritePictureController],
      providers,
    }).compile();

    controller = module.get<FavoritePictureController>(
      FavoritePictureController
    );
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);
    mockData = module.get<MockDataProvider>(MockDataProvider);

    await lifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /favorite/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserFavoritesPictures("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserFavoritesPictures("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserFavoritesPictures("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.status).toBe("OK");
    });
    it("favorites_pictures response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.favorites_pictures).toBeDefined();
    });
    it("favorites_pictures pictures response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.favorites_pictures.pictures).toBeDefined();
    });
    it("favorites_pictures total response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.favorites_pictures.total).toBeDefined();
    });
    it("favorites_pictures total response data should be a number", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(typeof response.favorites_pictures.total).toBe("number");
    });
    it("favorites_pictures picture response data should be an array", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(Array.isArray(response.favorites_pictures.pictures)).toBe(true);
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      expect(response.owner).toBeDefined();
    });
    it("owner response data should be match to requested user", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
        await controller.retrieveUserFavoritesPictures(user.name);

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.owner)).toMatch(JSON.stringify(user));
    });
  });
});
