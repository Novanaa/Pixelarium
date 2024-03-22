import { Module } from "@nestjs/common";
import { RetrieveUserService } from "./services/retrieve-user.service";
import { UserController } from "./user.controller";

@Module({
  controllers: [UserController],
  providers: [RetrieveUserService],
})
export class UserModule {}
