import {
  Controller,
  Delete,
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
  DeletePictureProvider,
  DownloadUserPictureProvider,
  RetrieveUserPictureProvider,
} from "./providers";
import { Response } from "express";
import { PrismaProvider } from "@/libs/providers";
import { ApplicationExceptionFilter } from "@/filter/error.filter";
import { RetrieveUserPictureResponseDTO } from "./providers/retrieve-picture/retrieve-picture.dto";
import { DownloadUserPicture } from "./providers/download-picture/download-picture";
import {
  DeletePictureResponseDTO,
  RemovesPicturesResponseDTO,
} from "./providers/delete-picture/delete-picture.dto";

@Controller("picture")
export class PictureController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserPictureService: RetrieveUserPictureProvider,
    private readonly downloadUserPictureService: DownloadUserPictureProvider,
    private readonly deletePictureService: DeletePictureProvider
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
      const response: Awaited<DownloadUserPicture> =
        await this.downloadUserPictureService.download(pictureId);

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${response.filename}`
      );
      return res.status(HttpStatus.OK).send(response.binary);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Delete("/:pictureId")
  @UseFilters(ApplicationExceptionFilter)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async deletePicture(
    @Param("pictureId", ParseUUIDPipe) pictureId: string
  ): Promise<DeletePictureResponseDTO> {
    try {
      return await this.deletePictureService.deletePicture(pictureId);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  @Delete("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async removesPictures(
    @Param("name") name: string
  ): Promise<RemovesPicturesResponseDTO> {
    try {
      return await this.deletePictureService.RemovesPictures(name);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
