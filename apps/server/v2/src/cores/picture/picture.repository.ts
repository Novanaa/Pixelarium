import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { Picture } from "@prisma/client";

@Injectable()
export class PictureRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findUniqueById(pictureId: string): Promise<Picture> {
    return await this.prisma.picture.findUnique({ where: { id: pictureId } });
  }

  public async findManyByGalleryId(galleryId: string): Promise<Array<Picture>> {
    return await this.prisma.picture.findMany({
      where: { gallery_id: galleryId },
    });
  }
}