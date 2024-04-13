import { Test, TestingModule } from "@nestjs/testing";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { PictureModule } from "@/cores/picture/picture.module";
import { EmbedLinkModule } from "../embed-link.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import { randUuid } from "@ngneat/falso";
import { RetrievePictureEmbedLinkResponseDTO } from "../providers/retrieve-link/retrieve-link.dto";
import { EmbedLinks, Picture } from "@prisma/client";

describe("EmbedLinkController", () => {
  let app: INestApplication;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        LibsModule,
        CommonModule,
        PictureModule,
        EmbedLinkModule,
        TestModule,
      ],
    }).compile();

    app = module.createNestApplication();
    lifecycleTest = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    error = module.get<ErrorProvider>(ErrorProvider);

    await app.init();
    await lifecycleTest.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycleTest.cleanUpDirectory();
    await lifecycleTest.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /embed-link/:pictureId", () => {
    it("should be throw bad request exception if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("Validation failed (uuid is expected)")
      );
    });
    it("should be return 400 status code if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the picture embed link doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + randUuid());
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 404 status code if the picture embed link doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + randUuid());
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("should be throw not found exception if the picture embed link doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + randUuid());
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.notFound("Sorry, the requested picture embed link was not found.")
      );
    });
    it("should be return 200 status code", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + picture.id);
      const body: RetrievePictureEmbedLinkResponseDTO =
        response.body as RetrievePictureEmbedLinkResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + picture.id);
      const body: RetrievePictureEmbedLinkResponseDTO =
        response.body as RetrievePictureEmbedLinkResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("embed link response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + picture.id);
      const body: RetrievePictureEmbedLinkResponseDTO =
        response.body as RetrievePictureEmbedLinkResponseDTO;

      expect(body.embed_link).toBeDefined();
    });
    it("embed link response data should be match to requested picture embed link data", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const embedLink: Awaited<EmbedLinks> = await prisma.embedLinks.findUnique(
        {
          where: { picture_id: picture.id },
        }
      );
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/embed-link/" + picture.id);
      const body: RetrievePictureEmbedLinkResponseDTO =
        response.body as RetrievePictureEmbedLinkResponseDTO;

      expect(JSON.stringify(body.embed_link)).toMatch(
        JSON.stringify(embedLink)
      );
    });
  });
});
