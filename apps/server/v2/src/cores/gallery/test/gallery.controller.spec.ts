import { Test, TestingModule } from "@nestjs/testing";
import { GalleryController } from "../gallery.controller";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { GalleryModule } from "../gallery.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import providers from "../providers";
import { RetrieveUserGalleryResponseDto } from "../providers/retrieve-gallery/retrieve-gallery.dto";
import { User } from "@prisma/client";
import { GalleryRepository } from "../gallery.repository";

describe("GalleryController", () => {
  let controller: GalleryController;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;
  let mockData: MockDataProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        CommonModule,
        UserModule,
        GalleryModule,
        TestModule,
      ],
      controllers: [GalleryController],
      providers: [...providers, GalleryRepository],
    }).compile();

    controller = module.get<GalleryController>(GalleryController);
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

  describe("GET /gallery/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserGallery("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserGallery("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.retrieveUserGallery("0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserGalleryResponseDto> =
        await controller.retrieveUserGallery(user.name);

      expect(response.status).toBe("OK");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserGalleryResponseDto> =
        await controller.retrieveUserGallery(user.name);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("user_gallery response data field should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserGalleryResponseDto> =
        await controller.retrieveUserGallery(user.name);

      expect(response.user_gallery).toBeDefined();
    });
    it("user_gallery pictures response data field should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserGalleryResponseDto> =
        await controller.retrieveUserGallery(user.name);

      expect(response.user_gallery.pictures).toBeDefined();
    });
    it("user_gallery pictures response data field should be an array", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<RetrieveUserGalleryResponseDto> =
        await controller.retrieveUserGallery(user.name);

      expect(Array.isArray(response.user_gallery.pictures)).toBe(true);
    });
  });
});
