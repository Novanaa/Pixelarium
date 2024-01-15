import { Album, Picture } from "../../../../../generated/client";

export default interface UserAlbums extends Album {
  pictures: Array<Picture>;
}
