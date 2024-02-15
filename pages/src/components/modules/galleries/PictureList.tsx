import React from "react";
import Picture from "./Picture";
import PicturesLoading from "./Loading";
import getGalleryPictures, {
  GalleryResponseAPI,
} from "@/services/getGalleryPictures";
import { default as IPicture } from "@/components/interfaces/types/Picture";

export default async function GalleryPictures(): Promise<React.ReactElement> {
  const gallery: Awaited<GalleryResponseAPI | null> =
    await getGalleryPictures();

  const pictures: Array<IPicture> | undefined = gallery?.data.gallery.pictures;

  return (
    <main>
      {!gallery ? <PicturesLoading /> : <Picture pictures={pictures} />}
    </main>
  );
}
