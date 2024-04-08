import { WebResponse } from "@/model/app.model";
import { UserGallery } from "@/model/app";

export class RetrieveUserGalleryResponseDto extends WebResponse {
  user_gallery: UserGallery;
}
