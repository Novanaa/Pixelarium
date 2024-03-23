import { Global, Module } from "@nestjs/common";
import { ErrorService } from "./error.service";
import { MockData } from "./mock.service";

@Global()
@Module({
  providers: [ErrorService, MockData],
  exports: [ErrorService, MockData],
})
export class CommonModule {}
