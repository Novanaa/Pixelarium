import { RetrieveUserFavoritesPicturesProvider } from "./retrieve-favorites/retrieve-favotires.provider";
import { UnfavoritePictureProvider } from "./unfavorite/unfavorite.provider";
import { AddUserFavoritePictureProvider } from "./add-picture/add-favorite-picture.provider";

export {
  RetrieveUserFavoritesPicturesProvider,
  UnfavoritePictureProvider,
  AddUserFavoritePictureProvider,
};

export default [
  RetrieveUserFavoritesPicturesProvider,
  UnfavoritePictureProvider,
  AddUserFavoritePictureProvider,
];
