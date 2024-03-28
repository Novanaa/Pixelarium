import { Global, Module } from "@nestjs/common";
import * as provider from "./providers";

@Global()
@Module({
  providers: [provider.GeneratorProvider],
  exports: [provider.GeneratorProvider],
})
export class TestModule {}
