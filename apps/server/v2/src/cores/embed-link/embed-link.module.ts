import providers, { RetrievePictureEmbedLinkProvider } from "./providers";
import { Module } from "@nestjs/common";
import { EmbedLinkController } from "./embed-link.controller";

@Module({
  providers,
  controllers: [EmbedLinkController],
  exports: [RetrievePictureEmbedLinkProvider],
})
export class EmbedLinkModule {}
