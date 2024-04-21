import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserFavoritesPicturesResponseDto } from "./retrieve-favotires.dto";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { Favorite, Picture } from "@prisma/client";
import { FavoritePictureRepository } from "../../favorite-picture.repository";

@Injectable()
export class RetrieveUserFavoritesPicturesProvider {
  constructor(
    private readonly retrieveUser: RetrieveUserProvider,
    private readonly favoritePictureRepo: FavoritePictureRepository
  ) {}

  public async retrieveUserFavoritesPictures(
    name: string
  ): Promise<RetrieveUserFavoritesPicturesResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUser.retrieveSingleUser(name);

    const favorite: Awaited<Favorite> =
      await this.favoritePictureRepo.findByUserId(user.id);

    const favoritedPictures: Awaited<Array<Picture>> =
      await this.favoritePictureRepo.findFavoritedPictures(favorite.id);

    return {
      favorites_pictures: { ...favorite, pictures: favoritedPictures },
      owner: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
