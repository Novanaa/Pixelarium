import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { GoogleAuthProvider } from "./providers/google/google.provider";
import { UserModule } from "../user/user.module";
import { UserInfoProvider } from "./providers/userinfo/userinfo.provider";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [GoogleAuthProvider, UserInfoProvider],
})
export class AuthModule {}
