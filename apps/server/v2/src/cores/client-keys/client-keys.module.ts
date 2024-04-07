import providers, { CredentialsProvider } from "./providers";
import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { ClientKeysController } from "./client-keys.controller";

@Module({
  imports: [UserModule],
  controllers: [ClientKeysController],
  providers,
  exports: [CredentialsProvider],
})
export class ClientKeysModule {}
