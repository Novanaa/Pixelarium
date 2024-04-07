import { Test, TestingModule } from "@nestjs/testing";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { UserModule } from "@/cores/user/user.module";
import { GalleryModule } from "../gallery.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { User } from "@prisma/client";
import { RetrieveUserGalleryResponseDto } from "../providers/retrieve-gallery/retrieve-gallery.dto";

describe("GalleryController", () => {
  let app: INestApplication;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;
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
    }).compile();

    app = module.createNestApplication();
    lifecycle = module.get<LifecycleProvider>(LifecycleProvider);
    prisma = module.get<PrismaProvider>(PrismaProvider);
    error = module.get<ErrorProvider>(ErrorProvider);
    mockData = module.get<MockDataProvider>(MockDataProvider);

    await app.init();
    await lifecycle.ModuleTestInit();
  });

  afterAll(async () => {
    lifecycle.cleanUpDirectory();
    await lifecycle.cleanUpDatabase();
  });

  afterEach(async () => await prisma.$disconnect());

  describe("GET /gallery/:name", () => {
    it("should be throw not found exception error response if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/gallery/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/gallery/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/gallery/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/gallery/" + user.name);
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/gallery/" + user.name);
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(body.status).toBe("OK");
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/gallery/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(body.status).toBe("OK");
    });
    it("user_gallery response data field should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/gallery/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(body.user_gallery).toBeDefined();
    });
    it("user_gallery pictures response data field should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/gallery/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(body.user_gallery.pictures).toBeDefined();
    });
    it("user_gallery pictures response data field should be an array", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .get("/gallery/" + user.name)
          .set("Content-Type", "application/json");
      const body: RetrieveUserGalleryResponseDto =
        response.body as RetrieveUserGalleryResponseDto;

      expect(Array.isArray(body.user_gallery.pictures)).toBe(true);
    });
  });
});
