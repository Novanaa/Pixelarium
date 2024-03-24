import { Module } from "@nestjs/common";
import { RetrieveUserService } from "./services/retrieve-user.service";
import { UserController } from "./user.controller";
import { DeleteUserService } from "./services/delete-user.service";

@Module({
  controllers: [UserController],
  providers: [RetrieveUserService, DeleteUserService],
})
export class UserModule {}
