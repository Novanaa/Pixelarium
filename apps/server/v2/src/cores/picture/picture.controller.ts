import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  UseFilters,
} from "@nestjs/common";
import { RetrieveUserPictureResponseDTO } from "./providers/retrieve-picture/retrieve-picture.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserPictureProvider } from "./providers";
import { ApplicationExceptionFilter } from "@/filter/error.filter";

@Controller("picture")
export class PictureController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserPictureService: RetrieveUserPictureProvider
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
}
