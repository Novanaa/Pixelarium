import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as libsProvider from "./providers";

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [libsProvider.PrismaProvider, libsProvider.GoogleProvider],
  exports: [libsProvider.PrismaProvider, libsProvider.GoogleProvider],
})
export class LibsModule {}
