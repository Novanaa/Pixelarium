import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import providers, { RetrieveUserProvider } from "./providers";
import { UserRepository } from "./user.repository";

@Module({
  controllers: [UserController],
  providers: [...providers, UserRepository],
  exports: [RetrieveUserProvider, UserRepository],
})
export class UserModule {}
