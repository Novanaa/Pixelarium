import {
  Album,
  Picture,
} from "../../../../../packages/prisma/generated/client";

export default interface UserAlbums extends Album {
  pictures: Array<Picture>;
}
