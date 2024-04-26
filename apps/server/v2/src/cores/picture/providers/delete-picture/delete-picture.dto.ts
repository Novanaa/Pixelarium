import { Picture, User } from "@prisma/client";
import { WebResponse } from "@/model/app.model";
import { UserGallery } from "@/model/app";

export class DeletePictureResponseDTO extends WebResponse {
  deleted_picture: Picture;
}

export class RemovesPicturesResponseDTO extends WebResponse {
  gallery: UserGallery;
  owner: User;
}
