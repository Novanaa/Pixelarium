import { Global, Module } from "@nestjs/common";
import * as provider from "./providers";

@Global()
@Module({
  providers: [provider.GeneratorProvider, provider.LifecycleProvider],
  exports: [provider.GeneratorProvider, provider.LifecycleProvider],
})
export class TestModule {}
