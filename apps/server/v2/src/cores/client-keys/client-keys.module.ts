import { Module } from "@nestjs/common";
import { ClientKeysController } from "./client-keys.controller";
import * as provider from "./providers";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [ClientKeysController],
  providers: [
    provider.CredentialsProvider,
    provider.RetrieveUserClientCredentialsKeysProvider,
  ],
  exports: [provider.CredentialsProvider],
})
export class ClientKeysModule {}
