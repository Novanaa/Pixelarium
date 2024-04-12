import { RetrieveUserFavoritesPicturesProvider } from "./retrieve-favorites/retrieve-favotires.provider";
import { UnfavoritePictureProvider } from "./unfavorite/unfavorite.provider";
import { AddUserFavoritePicture } from "./add-picture/add-favorite-picture.provider";

export {
  RetrieveUserFavoritesPicturesProvider,
  UnfavoritePictureProvider,
  AddUserFavoritePicture,
};

export default [
  RetrieveUserFavoritesPicturesProvider,
  UnfavoritePictureProvider,
  AddUserFavoritePicture,
];
