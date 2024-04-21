import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { Favorite, Picture } from "@prisma/client";

@Injectable()
export class FavoritePictureRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findByUserId(userId: string): Promise<Favorite> {
    return await this.prisma.favorite.findUnique({
      where: { user_id: userId },
    });
  }

  public async findFavoritedPictures(
    favoriteId: string
  ): Promise<Array<Picture>> {
    return await this.prisma.picture.findMany({
      where: {
        favorite: { some: { id: favoriteId } },
      },
    });
  }

  public async findFavoritedPicture(
    pictureId: string,
    favoriteId: string
  ): Promise<Picture> {
    return await this.prisma.picture.findUnique({
      where: { id: pictureId, favorite_id: favoriteId },
    });
  }
}
