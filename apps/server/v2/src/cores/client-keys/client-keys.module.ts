import { Module } from "@nestjs/common";
import { ClientKeysController } from "./client-keys.controller";
import * as provider from "./providers";

@Module({
  controllers: [ClientKeysController],
  providers: [provider.CredentialsProvider],
})
export class ClientKeysModule {}
