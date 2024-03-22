import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LibsModule } from "./libs/libs.module";
import { UserModule } from "./cores/user/user.module";

@Module({
  imports: [LibsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
