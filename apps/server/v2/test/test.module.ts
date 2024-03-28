import { Global, Module } from "@nestjs/common";
import * as provider from "./providers";

@Global()
@Module({
  providers: [provider.LifecycleProvider],
  exports: [provider.LifecycleProvider],
})
export class TestModule {}
