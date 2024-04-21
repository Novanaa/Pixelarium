import providers, { CredentialsProvider } from "./providers";
import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { ClientKeysController } from "./client-keys.controller";
import { ClientKeysRepository } from "./client-keys.repository";

@Module({
  imports: [UserModule],
  controllers: [ClientKeysController],
  providers: [...providers, ClientKeysRepository],
  exports: [CredentialsProvider, ClientKeysRepository],
})
export class ClientKeysModule {}
