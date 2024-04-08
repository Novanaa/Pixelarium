import { WebResponse } from "@/model/app.model";
import { Picture, User } from "@prisma/client";

export class UnfavoritePictureResponseDTO extends WebResponse {
  owner: User;
  unfav_picture: Picture;
}
