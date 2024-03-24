import { Global, Module } from "@nestjs/common";
import * as commonProviders from "./providers";

@Global()
@Module({
  providers: [
    commonProviders.ErrorProvider,
    commonProviders.MockDataProvider,
    commonProviders.StaticDirectoryProvider,
  ],
  exports: [
    commonProviders.ErrorProvider,
    commonProviders.MockDataProvider,
    commonProviders.StaticDirectoryProvider,
  ],
})
export class CommonModule {}
