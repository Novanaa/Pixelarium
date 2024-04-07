import { Gallery, Picture } from "@prisma/client";

export interface UserGallery extends Gallery {
  pictures: Array<Picture>;
}
