import providers from "./providers";
import { Module } from "@nestjs/common";
import { FavoritePictureController } from "./favorite-picture.controller";

@Module({
  controllers: [FavoritePictureController],
  providers,
})
export class FavoritePictureModule {}
