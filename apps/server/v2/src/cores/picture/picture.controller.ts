import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Res,
  UseFilters,
} from "@nestjs/common";
import {
  DownloadUserPictureProvider,
  RetrieveUserPictureProvider,
} from "./providers";
import { Response } from "express";
import { PrismaProvider } from "@/libs/providers";
import { ApplicationExceptionFilter } from "@/filter/error.filter";
import { RetrieveUserPictureResponseDTO } from "./providers/retrieve-picture/retrieve-picture.dto";

@Controller("picture")
export class PictureController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserPictureService: RetrieveUserPictureProvider,
    private readonly downloadUserPictureService: DownloadUserPictureProvider
  ) {}

  @Get("/:pictureId")
  @UseFilters(ApplicationExceptionFilter)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUserPicture(
    @Param("pictureId", ParseUUIDPipe) pictureId: string
  ): Promise<RetrieveUserPictureResponseDTO> {
    try {
      return await this.retrieveUserPictureService.retrievePicture(pictureId);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Get("/download/:pictureId")
  @UseFilters(ApplicationExceptionFilter)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async downloadPicture(
    @Param("pictureId", ParseUUIDPipe) pictureId: string,
    @Res() res: Response
  ): Promise<Response> {
    try {
      return await this.downloadUserPictureService.download({
        pictureId,
        httpResponse: res,
      });
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
