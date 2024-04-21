import { PrismaProvider } from "@/libs/providers";
import { HttpStatus, Injectable } from "@nestjs/common";
import { RetrieveUserFavoritesPicturesResponseDto } from "./retrieve-favotires.dto";
import { RetrieveUserProvider } from "@/cores/user/providers";
import { RetrieveUserResponseDto } from "@/cores/user/providers/retrieve-user/retrieve-user.dto";
import { Favorite, Picture } from "@prisma/client";

@Injectable()
export class RetrieveUserFavoritesPicturesProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUser: RetrieveUserProvider
  ) {}

  public async retrieveUserFavoritesPicturesByUserId(
    userId: string
  ): Promise<Favorite> {
    return await this.prisma.favorite.findUnique({
      where: { user_id: userId },
    });
  }

  public async retrieveFavoritedPictures(
    favoriteId: string
  ): Promise<Array<Picture>> {
    return await this.prisma.picture.findMany({
      where: {
        favorite: { some: { id: favoriteId } },
      },
    });
  }

  public async retrieveUserFavoritesPictures(
    name: string
  ): Promise<RetrieveUserFavoritesPicturesResponseDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUser.retrieveSingleUser(name);

    const favorite: Awaited<Favorite> =
      await this.retrieveUserFavoritesPicturesByUserId(user.id);

    const favoritedPictures: Awaited<Array<Picture>> =
      await this.retrieveFavoritedPictures(favorite.id);

    return {
      favorites_pictures: { ...favorite, pictures: favoritedPictures },
      owner: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
