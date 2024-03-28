import { Module } from "@nestjs/common";
import * as provider from "./providers";

@Module({
  providers: [provider.GeneratorProvider],
})
export class TestModule {}
