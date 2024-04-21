import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { Gallery } from "@prisma/client";

@Injectable()
export class GalleryRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findUniqueByUserId(userId: string): Promise<Gallery> {
    return await this.prisma.gallery.findUnique({
      where: { user_id: userId },
    });
  }
}
