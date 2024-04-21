import providers, { RetrieveUserPictureProvider } from "./providers";
import { Module } from "@nestjs/common";
import { PictureController } from "./picture.controller";
import { UserModule } from "../user/user.module";
import { EmbedLinkModule } from "../embed-link/embed-link.module";
import { PictureRepository } from "./picture.repository";

@Module({
  imports: [UserModule, EmbedLinkModule],
  controllers: [PictureController],
  exports: [RetrieveUserPictureProvider],
  providers: [...providers, PictureRepository],
})
export class PictureModule {}
