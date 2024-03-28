import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as libsProvider from "./providers";

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [libsProvider.PrismaProvider],
  exports: [libsProvider.PrismaProvider],
})
export class LibsModule {}
