import { WebResponse } from "@/model/app.model";
import { Gallery } from "@prisma/client";

export class RetrieveUserGalleryResponseDto extends WebResponse {
  user_gallery: Gallery;
}
