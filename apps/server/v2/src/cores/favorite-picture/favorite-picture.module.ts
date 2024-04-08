import { Module } from "@nestjs/common";
import { FavoritePictureController } from "./favorite-picture.controller";

@Module({
  controllers: [FavoritePictureController],
})
export class FavoritePictureModule {}
