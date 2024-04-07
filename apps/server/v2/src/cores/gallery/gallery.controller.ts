import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { RetrieveUserGalleryResponseDto } from "./providers/retrieve-gallery/retrieve-gallery.dto";
import { PrismaProvider } from "@/libs/providers";
import { RetrieveUserGalleryProvider } from "./providers";

@Controller("gallery")
export class GalleryController {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly retrieveUserGalleryService: RetrieveUserGalleryProvider
  ) {}

  @Get("/:name")
  @Header("Content-Type", "application/json")
  @Header("Accept", "application/json")
  @HttpCode(HttpStatus.OK)
  public async retrieveUserGallery(
    @Param("name") name: string
  ): Promise<RetrieveUserGalleryResponseDto> {
    try {
      return await this.retrieveUserGalleryService.retrieveUserGallery(name);
    } finally {
      this.prisma.$disconnect();
    }
  }
}
