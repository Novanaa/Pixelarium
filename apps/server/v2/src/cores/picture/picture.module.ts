import providers from "./providers";
import { Module } from "@nestjs/common";
import { PictureController } from "./picture.controller";

@Module({
  controllers: [PictureController],
  exports: [],
  providers,
})
export class PictureModule {}
