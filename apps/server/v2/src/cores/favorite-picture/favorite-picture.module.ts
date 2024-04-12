import providers from "./providers";
import { Module } from "@nestjs/common";
import { FavoritePictureController } from "./favorite-picture.controller";
import { UserModule } from "../user/user.module";
import { PictureModule } from "../picture/picture.module";

@Module({
  imports: [UserModule, PictureModule],
  controllers: [FavoritePictureController],
  providers,
})
export class FavoritePictureModule {}
