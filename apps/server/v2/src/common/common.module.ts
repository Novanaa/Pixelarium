import { Global, Module } from "@nestjs/common";
import { ErrorService } from "./error.service";
import { MockData } from "./mock.service";
import { StaticDirectorySerive } from "./static-directory.service";

@Global()
@Module({
  providers: [ErrorService, MockData, StaticDirectorySerive],
  exports: [ErrorService, MockData, StaticDirectorySerive],
})
export class CommonModule {}
