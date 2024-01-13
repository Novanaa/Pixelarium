import { Favorite, Picture } from "../../../../../generated/client";

export default interface UserFavoritePictures extends Favorite {
  pictures: Array<Picture>;
}
