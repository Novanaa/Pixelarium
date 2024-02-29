import {
  Favorite,
  Picture,
} from "../../../../../packages/prisma/generated/client";

export default interface UserFavoritePictures extends Favorite {
  pictures: Array<Picture>;
}
