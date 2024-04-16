import { UserModule } from "@/cores/user/user.module";
import { Test, TestingModule } from "@nestjs/testing";
import { PictureModule } from "../picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import * as falso from "@ngneat/falso";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider } from "@/common/providers";
import { EmbedLinks, Picture } from "@prisma/client";
import { RetrieveUserPictureResponseDTO } from "../providers/retrieve-picture/retrieve-picture.dto";

describe("Picturecontroller", () => {
  let app: INestApplication;
  let lifecycleTest: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;

  beforeAll(async () => {
    const module: Awaited<TestingModule> = await Test.createTestingModule({
      imports: [
        UserModule,
        PictureModule,
        LibsModule,
        CommonModule,
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

  describe("GET /picture/:pictureId", () => {
    it("should be throw not found exception if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get(
          "/picture/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.notFound("Sorry, the requested picture could not be found.")
      );
    });
    it("should be return 404 status code if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get(
          "/picture/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get(
          "/picture/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request exception if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/picture/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("Validation failed (uuid is expected)")
      );
    });
    it("should be return 400 status code if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/picture/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the picture id is not a UUID", async () => {
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/picture/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer()).get("/picture/" + picture.id);
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("make sure it can accept application/json", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("picture response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(body.picture).toBeDefined();
    });
    it("picture response data should be match to requested picture", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(JSON.stringify(body.picture)).toMatch(JSON.stringify(picture));
    });
    it("embed link response data should be match to requested picture embed link", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const embedLink: Awaited<EmbedLinks> = await prisma.embedLinks.findUnique(
        {
          where: { picture_id: picture.id },
        }
      );
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(JSON.stringify(body.embed_link)).toMatch(
        JSON.stringify(embedLink)
      );
    });
    it("embed link response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const response: Awaited<supertest.Request | supertest.Response> =
        await supertest(app.getHttpServer())
          .get("/picture/" + picture.id)
          .set("Content-Type", "application/json");
      const body: RetrieveUserPictureResponseDTO =
        response.body as RetrieveUserPictureResponseDTO;

      expect(body.embed_link).toBeDefined();
    });
  });

  describe("GET /picture/download/:pictureId", () => {
    it("should be throw bad request exception if the picture id is not UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/picture/download/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("Validation failed (uuid is expected)")
      );
    });
    it("should be return 400 status code if the picture id is not UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/picture/download/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the picture id is not UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/picture/download/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("status response should be 'KO' if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get(
          "/picture/download/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 404 status code if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get(
          "/picture/download/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("should be throw not found exception if the picture doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get(
          "/picture/download/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.notFound("Sorry, the requested picture could not be found.")
      );
    });
  });
});
