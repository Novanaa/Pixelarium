import { Module } from "@nestjs/common";
import { ClientKeysController } from "./client-keys.controller";

@Module({
  controllers: [ClientKeysController],
})
export class ClientKeysModule {}
