import { GalleryResponseAPI } from "@/services/get-gallery-pictures";
import Picture from "./Picture";

export default interface GalleryPicturesProps {
  pictures: Array<Picture> | undefined;
  gallery: GalleryResponseAPI | null;
}
