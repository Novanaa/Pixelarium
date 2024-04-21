import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Picture } from "@prisma/client";
import { RetrieveUserPictureResponseDTO } from "./retrieve-picture.dto";
import { ErrorProvider } from "@/common/providers";
import { RetrievePictureEmbedLinkProvider } from "@/cores/embed-link/providers";
import { RetrievePictureEmbedLinkResponseDTO } from "@/cores/embed-link/providers/retrieve-link/retrieve-link.dto";
import { PictureRepository } from "../../picture.repository";

@Injectable()
export class RetrieveUserPictureProvider {
  constructor(
    private readonly pictureRepo: PictureRepository,
    private readonly error: ErrorProvider,
    private readonly retrievePictureEmbedLinkService: RetrievePictureEmbedLinkProvider
  ) {}

  public async retrievePicture(
    pictureId: string
  ): Promise<RetrieveUserPictureResponseDTO> {
    const picture: Awaited<Picture> =
      await this.pictureRepo.findUniqueById(pictureId);

    if (!picture)
      throw new NotFoundException(
        this.error.notFound("Sorry, the requested picture could not be found.")
      );

    const { embed_link }: Awaited<RetrievePictureEmbedLinkResponseDTO> =
      await this.retrievePictureEmbedLinkService.retrieveEmbedLink(picture.id);

    return {
      picture,
      embed_link,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
