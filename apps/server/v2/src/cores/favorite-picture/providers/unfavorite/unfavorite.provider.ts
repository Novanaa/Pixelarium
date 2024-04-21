import { Picture } from "@prisma/client";
import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { UnfavoritePictureResponseDTO } from "./unfavorite.dto";
import { RetrieveUserFavoritesPicturesResponseDto } from "../retrieve-favorites/retrieve-favotires.dto";
import { ErrorProvider } from "@/common/providers";
import { FavoritePictureRepository } from "../../favorite-picture.repository";
import { RetrieveUserFavoritesPicturesProvider } from "../retrieve-favorites/retrieve-favotires.provider";

@Injectable()
export class UnfavoritePictureProvider {
  constructor(
    private readonly errorService: ErrorProvider,
    private readonly favoritePictureRepo: FavoritePictureRepository,
    private readonly retrieveFavoritePictureService: RetrieveUserFavoritesPicturesProvider
  ) {}

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
      await this.favoritePictureRepo.findFavoritedPicture(
        pictureId,
        userFavoritePicture.id
      );

    if (!favoritedPicture)
      throw new NotFoundException(
        this.errorService.notFound(
          "Trying to find the picture you want to unfavorite..."
        )
      );

    await this.favoritePictureRepo.unlinkFavoritedPicture(
      favoritedPicture.id,
      userFavoritePicture.id
    );

    return {
      unfav_picture: favoritedPicture,
      owner: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
