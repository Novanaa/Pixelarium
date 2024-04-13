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
import { ApplicationExceptionFilter } from "@/filter/error.filter";
import { RetrievePictureEmbedLinkResponseDTO } from "./providers/retrieve-link/retrieve-link.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrievePictureEmbedLinkProvider } from "./providers";

@Controller("embed-link")
export class EmbedLinkController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrievePicturEmbedLinkService: RetrievePictureEmbedLinkProvider
  ) {}

  @Get("/:pictureId")
  @UseFilters(ApplicationExceptionFilter)
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrievePicturEmbedLink(
    @Param("pictureId", ParseUUIDPipe) pictureId: string
  ): Promise<RetrievePictureEmbedLinkResponseDTO> {
    try {
      return await this.retrievePicturEmbedLinkService.retrieveEmbedLink(
        pictureId
      );
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
