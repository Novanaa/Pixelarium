import { UserFavoritesPictures } from "@/model/app";
import { WebResponse } from "@/model/app.model";

export class RetrieveUserFavoritesPicturesResponseDto extends WebResponse {
  favorites_pictures: UserFavoritesPictures;
}
