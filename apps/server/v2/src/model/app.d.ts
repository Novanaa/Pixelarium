import { Favorite, Picture } from "@prisma/client";

export interface UserFavoritesPictures extends Favorite {
  pictures: Array<Picture>;
}

export interface UserGallery extends Gallery {
  pictures: Array<Picture>;
}
