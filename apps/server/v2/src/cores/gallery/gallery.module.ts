import providers from "./providers";
import { Module } from "@nestjs/common";
import { GalleryController } from "./gallery.controller";
import { UserModule } from "../user/user.module";
import { GalleryRepository } from "./gallery.repository";

@Module({
  imports: [UserModule],
  controllers: [GalleryController],
  providers: [...providers, GalleryRepository],
})
export class GalleryModule {}
