import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { Favorite } from "@prisma/client";

@Injectable()
export class FavoritePictureRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findByUserId(userId: string): Promise<Favorite> {
    return await this.prisma.favorite.findUnique({
      where: { user_id: userId },
    });
  }
}
