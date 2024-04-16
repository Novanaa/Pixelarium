import { DownloadUserPicture } from "./download-picture";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ErrorProvider } from "@/common/providers";
import { RetrieveUserPictureResponseDTO } from "../retrieve-picture/retrieve-picture.dto";
import { RetrieveUserPictureProvider } from "../retrieve-picture/retrieve-picture.provider";

@Injectable()
export class DownloadUserPictureProvider {
  constructor(
    private readonly errorService: ErrorProvider,
    private readonly retrievePictureService: RetrieveUserPictureProvider
  ) {}

  public async download(pictureId: string): Promise<DownloadUserPicture> {
    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrievePictureService.retrievePicture(pictureId);

    if (picture.type == "External")
      throw new BadRequestException(
        this.errorService.badRequest(
          "Cannot download a picture from external link, instead use pixelarium integrated download feature."
        )
      );

    return {
      binary: picture.binary,
      filename: picture.filename,
    };
  }
}
