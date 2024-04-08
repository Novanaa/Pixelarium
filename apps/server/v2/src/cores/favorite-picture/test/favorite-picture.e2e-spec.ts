import { Test, TestingModule } from "@nestjs/testing";
import { UserModule } from "@/cores/user/user.module";
import { FavoritePictureModule } from "../favorite-picture.module";
import { LibsModule } from "@/libs/libs.module";
import { CommonModule } from "@/common/common.module";
import { TestModule } from "../../../../test/test.module";
import { LifecycleProvider } from "../../../../test/providers";
import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as supertest from "supertest";
import { ResponseError } from "@/model/error.model";
import { ErrorProvider, MockDataProvider } from "@/common/providers";
import { RetrieveUserFavoritesPicturesResponseDto } from "../providers/retrieve-favorites/retrieve-favotires.dto";
import { User } from "@prisma/client";

describe("FavoritePictureController", () => {
  let app: INestApplication;
  let lifecycle: LifecycleProvider;
  let prisma: PrismaProvider;
  let error: ErrorProvider;
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

  describe("GET /favorite/:name", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/0");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.status).toBe("OK");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.status).toBe("OK");
    });
    it("favorites_pictures response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.favorites_pictures).toBeDefined();
    });
    it("favorites_pictures pictures response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.favorites_pictures.pictures).toBeDefined();
    });
    it("favorites_pictures total response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.favorites_pictures.total).toBeDefined();
    });
    it("favorites_pictures total response data should be a number", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(typeof body.favorites_pictures.total).toBe("number");
    });
    it("favorites_pictures pictures response data should be an array", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(Array.isArray(body.favorites_pictures.pictures)).toBe(true);
    });
  });
});
