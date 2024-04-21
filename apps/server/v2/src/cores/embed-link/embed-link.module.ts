import providers, { RetrievePictureEmbedLinkProvider } from "./providers";
import { Module } from "@nestjs/common";
import { EmbedLinkController } from "./embed-link.controller";
import { EmbedLinkRepository } from "./embed-link.repository";

@Module({
  providers: [...providers, EmbedLinkRepository],
  controllers: [EmbedLinkController],
  exports: [RetrievePictureEmbedLinkProvider],
})
export class EmbedLinkModule {}
