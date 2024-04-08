import { Favorite, Picture } from "@prisma/client";

export interface UserFavoritesPictures extends Favorite {
  pictures: Array<Picture>;
}
