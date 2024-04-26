import providers, { RetrieveUserPictureProvider } from "./providers";
import { Module } from "@nestjs/common";
import { PictureController } from "./picture.controller";
import { UserModule } from "../user/user.module";
import { EmbedLinkModule } from "../embed-link/embed-link.module";
import { PictureRepository } from "./picture.repository";
import { GalleryModule } from "../gallery/gallery.module";

@Module({
  imports: [UserModule, EmbedLinkModule, GalleryModule],
  controllers: [PictureController],
  exports: [RetrieveUserPictureProvider, PictureRepository],
  providers: [...providers, PictureRepository],
})
export class PictureModule {}
