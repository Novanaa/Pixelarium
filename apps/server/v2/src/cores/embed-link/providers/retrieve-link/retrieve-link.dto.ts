import { WebResponse } from "@/model/app.model";
import { EmbedLinks } from "@prisma/client";

export class RetrievePictureEmbedLinkResponseDTO extends WebResponse {
  embed_link: EmbedLinks;
}
