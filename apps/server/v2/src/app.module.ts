import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LibsModule } from "./libs/libs.module";
import { UserModule } from "./cores/user/user.module";
import { CommonModule } from "./common/common.module";
import { TestModule } from "../test/test.module";
import { AuthModule } from "./cores/auth/auth.module";
import { ClientKeysModule } from "./cores/client-keys/client-keys.module";
import { GalleryModule } from "./cores/gallery/gallery.module";
import { FavoritePictureModule } from "./cores/favorite-picture/favorite-picture.module";
import { PictureModule } from "./cores/picture/picture.module";
import { EmbedLinkModule } from "./cores/embed-link/embed-link.module";
import { PaymentHistoryModule } from "./cores/payment-history/payment-history.module";

@Module({
  imports: [
    LibsModule,
    UserModule,
    CommonModule,
    TestModule,
    AuthModule,
    ClientKeysModule,
    GalleryModule,
    FavoritePictureModule,
    PictureModule,
    EmbedLinkModule,
    PaymentHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
