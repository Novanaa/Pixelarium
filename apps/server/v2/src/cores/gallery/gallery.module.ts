import providers from "./providers";
import { Module } from "@nestjs/common";
import { GalleryController } from "./gallery.controller";

@Module({
  controllers: [GalleryController],
  providers,
})
export class GalleryModule {}
