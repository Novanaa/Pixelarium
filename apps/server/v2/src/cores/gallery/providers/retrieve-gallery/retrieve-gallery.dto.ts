import { WebResponse } from "@/model/app.model";
import { UserGallery } from "@/model/gallery.model";

export class RetrieveUserGalleryResponseDto extends WebResponse {
  user_gallery: UserGallery;
}
