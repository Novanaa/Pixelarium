import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import * as provider from "./providers";

@Module({
  controllers: [UserController],
  providers: [provider.RetrieveUserProvider, provider.DeleteUserProvider],
  exports: [provider.RetrieveUserProvider],
})
export class UserModule {}
