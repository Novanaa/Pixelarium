import { WebResponse } from "@/model/app.model";
import { EmbedLinks, Picture } from "@prisma/client";

export class RetrieveUserPictureResponseDTO extends WebResponse {
  picture: Picture;
  embed_link: EmbedLinks;
}
