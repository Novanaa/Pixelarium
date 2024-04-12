import { WebResponse } from "@/model/app.model";
import { Picture, User } from "@prisma/client";

export class AddUserFavoritePictureResponseDTO extends WebResponse {
  added_picture: Picture;
  owner: User;
}
