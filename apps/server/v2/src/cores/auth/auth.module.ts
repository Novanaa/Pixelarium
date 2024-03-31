import * as provider from "./providers";
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    provider.GoogleAuthProvider,
    provider.UserInfoProvider,
    provider.GithubAuthProvider,
  ],
})
export class AuthModule {}
