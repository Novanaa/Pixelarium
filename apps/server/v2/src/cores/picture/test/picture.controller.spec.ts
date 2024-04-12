import { UserModule } from "@/cores/user/user.module";
import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { PictureModule } from "../picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { PictureController } from "../picture.controller";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import { Picture } from "@prisma/client";
import { RetrieveUserPictureResponseDTO } from "../providers/retrieve-picture/retrieve-picture.dto";

describe("Picturecontroller", () => {
  let controller: PictureController;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        PictureModule,
        LibsModule,
        CommonModule,
        TestModule,
      ],
      controllers: [PictureController],
      providers,
    }).compile();

    controller = module.get<PictureController>(PictureController);
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    errorService = module.get<ErrorProvider>(ErrorProvider);

    await lifecycleTest.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycleTest.cleanUpDirectory();
    await lifecycleTest.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /picture/:pictureId", () => {
    it("should be throw not found exception if the picture doesn't exist", async () => {
      try {
        await controller.retrieveUserPicture("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.notFound(
            "Sorry, the requested picture could not be found."
          )
        );
      }
    });
    it("should be return 404 if the picture doesn't exist", async () => {
      try {
        await controller.retrieveUserPicture("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the picture doesn't exist", async () => {
      try {
        await controller.retrieveUserPicture("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrieveUserPictureResponseDTO> =
        await controller.retrieveUserPicture(picture.id);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("picture response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrieveUserPictureResponseDTO> =
        await controller.retrieveUserPicture(picture.id);

      expect(response.picture).toBeDefined();
    });
    it("picture response data should be match to requested data", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrieveUserPictureResponseDTO> =
        await controller.retrieveUserPicture(picture.id);

      expect(JSON.stringify(response.picture)).toMatch(JSON.stringify(picture));
    });
    it("status response should be 'OK'", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrieveUserPictureResponseDTO> =
        await controller.retrieveUserPicture(picture.id);

      expect(response.status).toBe("OK");
    });
  });
});
