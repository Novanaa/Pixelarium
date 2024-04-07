import providers from "./providers";
import { Module } from "@nestjs/common";
import { GalleryController } from "./gallery.controller";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [GalleryController],
  providers,
})
export class GalleryModule {}
