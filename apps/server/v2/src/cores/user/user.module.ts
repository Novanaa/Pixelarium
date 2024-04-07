import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import providers, { RetrieveUserProvider } from "./providers";

@Module({
  controllers: [UserController],
  providers,
  exports: [RetrieveUserProvider],
})
export class UserModule {}
