import providers, { RetrieveUserPictureProvider } from "./providers";
import { Module } from "@nestjs/common";
import { PictureController } from "./picture.controller";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [PictureController],
  exports: [RetrieveUserPictureProvider],
  providers,
})
export class PictureModule {}
