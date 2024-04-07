import { Global, Module } from "@nestjs/common";
import * as commonProviders from "./providers";
import { ClientKeysModule } from "@/cores/client-keys/client-keys.module";

@Global()
@Module({
  imports: [ClientKeysModule],
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
