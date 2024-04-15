import * as axios from "axios";
import { DownloadUserPicture } from "./download-picture";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ErrorProvider, ValidationProvider } from "@/common/providers";
import { RetrieveUserPictureResponseDTO } from "../retrieve-picture/retrieve-picture.dto";
import { RetrieveUserPictureProvider } from "../retrieve-picture/retrieve-picture.provider";

@Injectable()
export class DownloadUserPictureProvider {
  constructor(
    private readonly errorService: ErrorProvider,
    private readonly validationService: ValidationProvider,
    private readonly retrievePictureService: RetrieveUserPictureProvider
  ) {}

  public async downloadExternalPicture(link: string): Promise<Buffer> {
    try {
      const picture: Awaited<axios.AxiosResponse<Buffer>> =
        await axios.default.get(link, {
          responseType: "arraybuffer",
        });
      const binary: Buffer = picture.data;

      if (!Buffer.isBuffer(binary))
        throw new BadRequestException(
          this.errorService.badRequest("Please provide a valid picture link!")
        );

      if (this.validationService.brokenPicture(binary))
        throw new BadRequestException(
          this.errorService.badRequest("Cannot downloaded broken picture!")
        );

      return binary;
    } catch (err) {
      throw new BadRequestException(
        this.errorService.badRequest("Something wrong when retrieve a picture!")
      );
    }
  }

  public async download(pictureId: string): Promise<DownloadUserPicture> {
    const { picture }: Awaited<RetrieveUserPictureResponseDTO> =
      await this.retrievePictureService.retrievePicture(pictureId);

    if (picture.type == "External")
      return {
        binary: await this.downloadExternalPicture(picture.data),
        filename: picture.filename,
      };

    return {
      binary: picture.binary,
      filename: picture.filename,
    };
  }
}
