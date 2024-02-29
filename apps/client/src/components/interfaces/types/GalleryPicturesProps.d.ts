import { GalleryResponseAPI } from "@/services/getGalleryPictures";
import Picture from "./Picture";

export default interface GalleryPicturesProps {
  pictures: Array<Picture> | undefined;
  gallery: GalleryResponseAPI | null
}
