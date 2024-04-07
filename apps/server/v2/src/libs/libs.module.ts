import { Global, Module } from "@nestjs/common";
import providers from "./providers";

@Global()
@Module({
  providers,
  exports: providers,
})
export class LibsModule {}
