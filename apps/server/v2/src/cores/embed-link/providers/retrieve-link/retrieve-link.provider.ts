import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { RetrievePictureEmbedLinkResponseDTO } from "./retrieve-link.dto";
import { PrismaProvider } from "@/libs/providers";
import { ErrorProvider } from "@/common/providers";
import { EmbedLinks } from "@prisma/client";

@Injectable()
export class RetrievePictureEmbedLinkProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly error: ErrorProvider
  ) {}

  public async retrieveEmbedLinkByPictureId(
    pictureId: string
  ): Promise<EmbedLinks> {
    return await this.prisma.embedLinks.findUnique({
      where: { picture_id: pictureId },
    });
  }

  public async retrieveEmbedLink(
    pictureId: string
  ): Promise<RetrievePictureEmbedLinkResponseDTO> {
    const pictureEmbedLink: Awaited<EmbedLinks> =
      await this.retrieveEmbedLinkByPictureId(pictureId);

    if (!pictureEmbedLink)
      throw new NotFoundException(
        this.error.notFound(
          "Sorry, the requested picture embed link was not found."
        )
      );

    return {
      embed_link: pictureEmbedLink,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
