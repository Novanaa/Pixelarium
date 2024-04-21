import { PrismaProvider } from "@/libs/providers";
import { Injectable } from "@nestjs/common";
import { EmbedLinks } from "@prisma/client";

@Injectable()
export class EmbedLinkRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  public async findEmbedLinkByPictureId(
    pictureId: string
  ): Promise<EmbedLinks> {
    return await this.prisma.embedLinks.findUnique({
      where: { picture_id: pictureId },
    });
  }
}
