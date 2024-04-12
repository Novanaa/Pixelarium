import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  UseFilters,
} from "@nestjs/common";
import { RetrieveUserFavoritesPicturesResponseDto } from "./providers/retrieve-favorites/retrieve-favotires.dto";
import { PrismaProvider } from "@/libs/providers";
import {
  AddUserFavoritePictureProvider,
  RetrieveUserFavoritesPicturesProvider,
  UnfavoritePictureProvider,
} from "./providers";
import { ApplicationExceptionFilter } from "@/filter/error.filter";
import { UnfavoritePictureResponseDTO } from "./providers/unfavorite/unfavorite.dto";
import { AddUserFavoritePictureResponseDTO } from "./providers/add-picture/add-favorite-picture.dto";

@Controller("favorite")
export class FavoritePictureController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveFavoritesPicturesService: RetrieveUserFavoritesPicturesProvider,
    private readonly unfavPictureService: UnfavoritePictureProvider,
    private readonly addUserFavoritePictureService: AddUserFavoritePictureProvider
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUserFavoritesPictures(
    @Param("name") name: string
  ): Promise<RetrieveUserFavoritesPicturesResponseDto> {
    try {
      return (await this.retrieveFavoritesPicturesService.retrieveUserFavoritesPictures(
        name
      )) satisfies Awaited<RetrieveUserFavoritesPicturesResponseDto>;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Delete("/:name/:pictureId")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  @UseFilters(ApplicationExceptionFilter)
  public async unfavPicture(
    @Param("name") name: string,
    @Param("pictureId", ParseUUIDPipe) pictureId: string
  ): Promise<UnfavoritePictureResponseDTO> {
    try {
      return await this.unfavPictureService.unfavPicture(name, pictureId);
    } finally {
      this.prisma.$disconnect();
    }
  }

  @Post("/:name/:pictureId")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.CREATED)
  @UseFilters(ApplicationExceptionFilter)
  public async markFavoritePicture(
    @Param("name") name: string,
    @Param("pictureId", ParseUUIDPipe) pictureId: string
  ): Promise<AddUserFavoritePictureResponseDTO> {
    try {
      return await this.addUserFavoritePictureService.AddFavoritePictureList(
        name,
        pictureId
      );
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
