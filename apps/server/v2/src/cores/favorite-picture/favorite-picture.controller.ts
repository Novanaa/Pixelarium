import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { RetrieveUserFavoritesPicturesResponseDto } from "./providers/retrieve-favorites/retrieve-favotires.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserFavoritesPicturesProvider } from "./providers";

@Controller("favorite")
export class FavoritePictureController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveFavoritesPicturesService: RetrieveUserFavoritesPicturesProvider
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
}
