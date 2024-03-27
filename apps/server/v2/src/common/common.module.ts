import { Global, Module } from "@nestjs/common";
import * as commonProviders from "./providers";

@Global()
@Module({
  providers: [
    commonProviders.ErrorProvider,
    commonProviders.MockDataProvider,
    commonProviders.StaticDirectoryProvider,
    commonProviders.ValidationProvider,
    commonProviders.PrettierProvider,
  ],
  exports: [
    commonProviders.ErrorProvider,
    commonProviders.MockDataProvider,
    commonProviders.StaticDirectoryProvider,
    commonProviders.ValidationProvider,
    commonProviders.PrettierProvider,
  ],
})
export class CommonModule {}
