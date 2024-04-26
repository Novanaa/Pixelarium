import { HttpStatus, Injectable } from "@nestjs/common";
import { PictureRepository } from "../../picture.repository";
import { DeletePictureResponseDTO } from "./delete-picture.dto";
import { RetrieveUserPictureProvider } from "../retrieve-picture/retrieve-picture.provider";
import { RetrieveUserPictureResponseDTO } from "../retrieve-picture/retrieve-picture.dto";

@Injectable()
export class DeletePictureProvider {
  constructor(
    private readonly pictureRepo: PictureRepository,
    private readonly retrievePictureService: RetrieveUserPictureProvider
  ) {}

  public async deletePicture(
    pictureId: string
  ): Promise<DeletePictureResponseDTO> {
    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrievePictureService.retrievePicture(pictureId);

    await this.pictureRepo.deletePicture(picture.id);

    return {
      deleted_picture: picture,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
