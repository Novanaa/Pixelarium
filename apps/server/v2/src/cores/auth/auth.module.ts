import providers from "./providers";
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { ClientKeysModule } from "../client-keys/client-keys.module";
import { AuthRepository } from "./auth.repository";

@Module({
  imports: [UserModule, ClientKeysModule],
  controllers: [AuthController],
  providers: [...providers, AuthRepository],
})
export class AuthModule {}
