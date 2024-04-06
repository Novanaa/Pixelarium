import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LibsModule } from "./libs/libs.module";
import { UserModule } from "./cores/user/user.module";
import { CommonModule } from "./common/common.module";
import { TestModule } from "../test/test.module";
import { AuthModule } from "./cores/auth/auth.module";
import { ClientKeysModule } from "./cores/client-keys/client-keys.module";

@Module({
  imports: [
    LibsModule,
    UserModule,
    CommonModule,
    TestModule,
    AuthModule,
    ClientKeysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
