import * as provider from "./providers";
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { ClientKeysModule } from "../client-keys/client-keys.module";

@Module({
  imports: [UserModule, ClientKeysModule],
  controllers: [AuthController],
  providers: [
    provider.GoogleAuthProvider,
    provider.UserInfoProvider,
    provider.GithubAuthProvider,
    provider.LogoutProvider,
    provider.TokenizerProvider,
  ],
})
export class AuthModule {}
