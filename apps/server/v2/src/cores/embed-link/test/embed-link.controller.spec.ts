import providers from "../providers";
import { Test, TestingModule } from "@nestjs/testing";
import { EmbedLinkController } from "../embed-link.controller";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { PictureModule } from "@/cores/picture/picture.module";
import { EmbedLinkModule } from "../embed-link.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import { RetrievePictureEmbedLinkResponseDTO } from "../providers/retrieve-link/retrieve-link.dto";
import { EmbedLinks, Picture } from "@prisma/client";

describe("EmbedLinkController", () => {
  let controller: EmbedLinkController;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let errorService: ErrorProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        CommonModule,
        PictureModule,
        EmbedLinkModule,
        TestModule,
      ],
      controllers: [EmbedLinkController],
      providers,
    }).compile();

    controller = module.get<EmbedLinkController>(EmbedLinkController);
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

  describe("GET /embed-link/:pictureId", () => {
    it("should be throw not found exception if the picture embed link doesn't exist", async () => {
      try {
        await controller.retrievePicturEmbedLink("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.notFound(
            "Sorry, the requested picture embed link was not found."
          )
        );
      }
    });
    it("should be return 404 status code if the picture embed link doesn't exist", async () => {
      try {
        await controller.retrievePicturEmbedLink("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the picture embed link doesn't exist", async () => {
      try {
        await controller.retrievePicturEmbedLink("test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrievePictureEmbedLinkResponseDTO> =
        await controller.retrievePicturEmbedLink(picture.id);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrievePictureEmbedLinkResponseDTO> =
        await controller.retrievePicturEmbedLink(picture.id);

      expect(response.status).toBe("OK");
    });
    it("embed-link response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<RetrievePictureEmbedLinkResponseDTO> =
        await controller.retrievePicturEmbedLink(picture.id);

      expect(response.embed_link).toBeDefined();
    });
    it("embed-link response data should be match to requested picture embed link data", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const embedLink: Awaited<EmbedLinks> = await prisma.embedLinks.findUnique(
        {
          where: { picture_id: picture.id },
        }
      );
      const response: Awaited<RetrievePictureEmbedLinkResponseDTO> =
        await controller.retrievePicturEmbedLink(picture.id);

      expect(JSON.stringify(response.embed_link)).toMatch(
        JSON.stringify(embedLink)
      );
    });
  });
});
