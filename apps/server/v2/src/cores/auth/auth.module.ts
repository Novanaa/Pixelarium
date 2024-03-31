import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { GoogleAuthProvider } from "./providers/google/google.provider";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [GoogleAuthProvider],
})
export class AuthModule {}
