import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { UnfavoritePictureResponseDTO } from "./unfavorite.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserFavoritesPicturesProvider } from "../retrieve-favorites/retrieve-favotires.provider";
import { RetrieveUserFavoritesPicturesResponseDto } from "../retrieve-favorites/retrieve-favotires.dto";
import { Favorite, Picture } from "@prisma/client";
import { ErrorProvider } from "@/common/providers";
import { UnlinkFavoritedPictureParams } from "./unfavorite";

@Injectable()
export class UnfavoritePictureProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveFavoritePictureService: RetrieveUserFavoritesPicturesProvider,
    private readonly errorService: ErrorProvider
  ) {}

  public async unlinkFavoritedPicture(
    param: UnlinkFavoritedPictureParams
  ): Promise<Favorite> {
    return await this.prisma.favorite.update({
      where: { id: param.favoriteId },
      data: {
        pictures: {
          disconnect: {
            id: param.pictureId,
          },
        },
      },
    });
  }

  public async unfavPicture(
    name: string,
    pictureId: string
  ): Promise<UnfavoritePictureResponseDTO> {
    const {
      owner: user,
      favorites_pictures: userFavoritePicture,
    }: Awaited<RetrieveUserFavoritesPicturesResponseDto> =
      (await this.retrieveFavoritePictureService.retrieveUserFavoritesPictures(
        name
      )) satisfies Awaited<RetrieveUserFavoritesPicturesResponseDto>;

    const favoritedPicture: Awaited<Picture> =
      await this.retrieveFavoritePictureService.retrieveFavroitedPicture({
        favoriteId: userFavoritePicture.id,
        pictureId,
      });

    if (!favoritedPicture)
      throw new NotFoundException(
        this.errorService.notFound(
          "Trying to find the picture you want to unfavorite..."
        )
      );

    await this.unlinkFavoritedPicture({
      favoriteId: userFavoritePicture.id,
      pictureId: favoritedPicture.id,
    });

    return {
      unfav_picture: favoritedPicture,
      owner: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
