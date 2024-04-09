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
import { Gallery, Picture, User } from "@prisma/client";
import * as falso from "@ngneat/falso";
import { UnfavoritePictureResponseDTO } from "../providers/unfavorite/unfavorite.dto";

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
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      expect(body.owner).toBeDefined();
    });
    it("owner response data should be match to requested user", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).get("/favorite/" + user.name);
      const body: RetrieveUserFavoritesPicturesResponseDto =
        response.body as RetrieveUserFavoritesPicturesResponseDto;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.owner)).toMatch(JSON.stringify(user));
    });
  });

  describe("DELETE /favorite/:name/:pictureId", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          "/favorite/0/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(error.notFound());
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          "/favorite/0/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' code if the user doesn't exist", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          "/favorite/0/" + falso.randUuid()
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw bad request exception if the picture id are not a UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete("/favorite/0/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.badRequest("Validation failed (uuid is expected)")
      );
    });
    it("should be return 400 status code if the picture id are not a UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete("/favorite/0/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.BAD_REQUEST);
      expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    });
    it("status response should be 'KO' if the picture id are not a UUID", async () => {
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete("/favorite/0/test");
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be throw not found exception if the picture doesn't exist in user favotite pictures", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          `/favorite/${user.name}/${falso.randUuid()}`
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body).toEqual(
        error.notFound("Trying to find the picture you want to unfavorite...")
      );
    });
    it("should be return 404 status code if the picture doesn't exist in user favotite pictures", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          `/favorite/${user.name}/${falso.randUuid()}`
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.code).toBe(HttpStatus.NOT_FOUND);
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
    });
    it("status response should be 'KO' if the picture doesn't exist in user favotite pictures", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          `/favorite/${user.name}/${falso.randUuid()}`
        );
      const body: ResponseError = response.body as ResponseError;

      expect(body.status).toBe("KO");
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          `/favorite/${user.name}/${picture.id}`
        );
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(body.code).toBe(HttpStatus.OK);
      expect(response.status).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer()).delete(
          `/favorite/${user.name}/${picture.id}`
        );
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("make sure it can accept application/json", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .delete(`/favorite/${user.name}/${picture.id}`)
          .set("Content-Type", "application/json");
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(body.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .delete(`/favorite/${user.name}/${picture.id}`)
          .set("Content-Type", "application/json");
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(body.owner).toBeDefined();
    });
    it("unfav_picture response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .delete(`/favorite/${user.name}/${picture.id}`)
          .set("Content-Type", "application/json");
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(body.unfav_picture).toBeDefined();
    });
    it("unfav_picture response data should be match to requested picture", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .delete(`/favorite/${user.name}/${picture.id}`)
          .set("Content-Type", "application/json");
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      expect(JSON.stringify(body.unfav_picture)).toMatch(
        JSON.stringify(picture)
      );
    });
    it("owner response data should be match to requested user data", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });
      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          gallery_id: userGallery.id,
          favorite: { connect: { user_id: user.id } },
        },
      });

      const response: Awaited<supertest.Response | supertest.Request> =
        await supertest(app.getHttpServer())
          .delete(`/favorite/${user.name}/${picture.id}`)
          .set("Content-Type", "application/json");
      const body: UnfavoritePictureResponseDTO =
        response.body as UnfavoritePictureResponseDTO;

      delete user.email;
      delete user.password;

      expect(JSON.stringify(body.owner)).toMatch(JSON.stringify(user));
    });
  });
});
