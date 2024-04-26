import { Gallery, Picture, User } from "@prisma/client";
import { WebResponse } from "@/model/app.model";

export class DeletePictureResponseDTO extends WebResponse {
  deleted_picture: Picture;
}

export class RemovesPicturesResponseDTO extends WebResponse {
  gallery: Gallery;
  owner: User;
}
