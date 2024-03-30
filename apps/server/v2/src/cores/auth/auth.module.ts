import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { GoogleAuthProvider } from "./providers/google/google.provider";

@Module({
  controllers: [AuthController],
  providers: [GoogleAuthProvider],
})
export class AuthModule {}
