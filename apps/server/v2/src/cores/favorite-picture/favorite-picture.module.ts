import providers from "./providers";
import { Module } from "@nestjs/common";
import { FavoritePictureController } from "./favorite-picture.controller";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [FavoritePictureController],
  providers,
})
export class FavoritePictureModule {}
