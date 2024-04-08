import { UserFavoritesPictures } from "@/model/app";
import { WebResponse } from "@/model/app.model";
import { User } from "@prisma/client";

export class RetrieveUserFavoritesPicturesResponseDto extends WebResponse {
  favorites_pictures: UserFavoritesPictures;
  owner: User;
}
