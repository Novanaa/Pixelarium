import providers, { RetrieveUserPictureProvider } from "./providers";
import { Module } from "@nestjs/common";
import { PictureController } from "./picture.controller";
import { UserModule } from "../user/user.module";
import { EmbedLinkModule } from "../embed-link/embed-link.module";

@Module({
  imports: [UserModule, EmbedLinkModule],
  controllers: [PictureController],
  exports: [RetrieveUserPictureProvider],
  providers,
})
export class PictureModule {}
