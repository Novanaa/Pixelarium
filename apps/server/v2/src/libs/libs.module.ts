import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import providers from "./providers";

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers,
  exports: providers,
})
export class LibsModule {}
