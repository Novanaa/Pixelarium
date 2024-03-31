import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as libsProvider from "./providers";

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [
    libsProvider.PrismaProvider,
    libsProvider.GoogleProvider,
    libsProvider.GithubProvider,
  ],
  exports: [
    libsProvider.PrismaProvider,
    libsProvider.GoogleProvider,
    libsProvider.GithubProvider,
  ],
})
export class LibsModule {}
