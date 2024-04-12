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
import { Gallery, Picture, User } from "@prisma/client";
import { randUuid } from "@ngneat/falso";
import { UnfavoritePictureResponseDTO } from "../providers/unfavorite/unfavorite.dto";
import { PictureModule } from "@/cores/picture/picture.module";
import { AddUserFavoritePictureResponseDTO } from "../providers/add-picture/add-favorite-picture.dto";

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
        PictureModule,
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

  describe("DELETE /favorite/:name/:pictureId", () => {
    it("should be throw not found exception response error if the user doesn't exist", async () => {
      try {
        await controller.unfavPicture("0", randUuid());
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.unfavPicture("0", randUuid());
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.unfavPicture("0", randUuid());
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be throw not found exception response error if the picture doesn't exist in user favorite picture", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.unfavPicture(user.name, "test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(
          errorService.notFound(
            "Trying to find the picture you want to unfavorite..."
          )
        );
      }
    });
    it("should be return 404 status code if the picture doesn't exist in user favorite picture", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.unfavPicture(user.name, "test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the picture doesn't exist in user favorite picture", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.unfavPicture(user.name, "test");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 200 status code", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      expect(response.code).toBe(HttpStatus.OK);
    });
    it("status response should be 'OK'", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      expect(response.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      expect(response.owner).toBeDefined();
    });
    it("owner response data should be match to requested user data", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.owner)).toMatch(JSON.stringify(user));
    });
    it("unfav_picture response data should be defined", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      expect(response.unfav_picture).toBeDefined();
    });
    it("unfav_picture response data should be match to requested picture", async () => {
      const user: Awaited<User> = await mockData.getRandomser();
      const userGallery: Awaited<Gallery> = await prisma.gallery.findUnique({
        where: { user_id: user.id },
      });

      const picture: Awaited<Picture> = await prisma.picture.create({
        data: {
          ...(mockData.generateRandomPicture() as Picture),
          favorite: { connect: { user_id: user.id } },
          gallery_id: userGallery.id,
        },
      });

      const response: Awaited<UnfavoritePictureResponseDTO> =
        await controller.unfavPicture(user.name, picture.id);

      expect(JSON.stringify(response.unfav_picture)).toMatch(
        JSON.stringify(picture)
      );
    });
  });

  describe("POST /favorite/:name/:pictureId", () => {
    it("should be throw not found exception if the user doesn't exist", async () => {
      try {
        await controller.markFavoritePicture("test", "0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response).toEqual(errorService.notFound());
      }
    });
    it("should be return 404 status code if the user doesn't exist", async () => {
      try {
        await controller.markFavoritePicture("test", "0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the user doesn't exist", async () => {
      try {
        await controller.markFavoritePicture("test", "0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be throw not found exception if the picture doesn't exist", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.markFavoritePicture(user.name, "0");
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
    it("should be return 404 status code if the picture doesn't exist", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.markFavoritePicture(user.name, "0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(err.getStatus()).toBe(HttpStatus.NOT_FOUND);
      }
    });
    it("status response should be 'KO' if the picture doesn't exist", async () => {
      try {
        const user: Awaited<User> = await mockData.getRandomser();
        await controller.markFavoritePicture(user.name, "0");
      } catch (error) {
        const err: HttpException = error as HttpException;
        const response: ResponseError = err.getResponse() as ResponseError;

        expect(response.status).toBe("KO");
      }
    });
    it("should be return 201 status code", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      expect(response.code).toBe(HttpStatus.CREATED);
    });
    it("status response should 'OK'", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      expect(response.status).toBe("OK");
    });
    it("owner response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      expect(response.owner).toBeDefined();
    });
    it("added_picture response data should be defined", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      expect(response.added_picture).toBeDefined();
    });
    it("added_picture response data should be match to requested picture data", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      expect(JSON.stringify(response.added_picture)).toMatch(
        JSON.stringify(picture)
      );
    });
    it("owner response data should be match to requested user data", async () => {
      const picture: Awaited<Picture> = await prisma.picture.findFirst();
      const user: Awaited<User> = await mockData.getRandomser();
      const response: Awaited<AddUserFavoritePictureResponseDTO> =
        await controller.markFavoritePicture(user.name, picture.id);

      delete user.email;
      delete user.password;

      expect(JSON.stringify(response.owner)).toMatch(JSON.stringify(user));
    });
  });
});
