import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { RetrievePictureEmbedLinkResponseDTO } from "./retrieve-link.dto";
import { ErrorProvider } from "@/common/providers";
import { EmbedLinks } from "@prisma/client";
import { EmbedLinkRepository } from "../../embed-link.repository";

@Injectable()
export class RetrievePictureEmbedLinkProvider {
  constructor(
    private readonly error: ErrorProvider,
    private readonly embedLinkRepo: EmbedLinkRepository
  ) {}

  public async retrieveEmbedLink(
    pictureId: string
  ): Promise<RetrievePictureEmbedLinkResponseDTO> {
    const pictureEmbedLink: Awaited<EmbedLinks> =
      await this.embedLinkRepo.findEmbedLinkByPictureId(pictureId);

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
