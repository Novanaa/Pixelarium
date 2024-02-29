import React from "react";
import Picture from "./picture";
import PicturesLoading from "./loading";
import GalleryPicturesProps from "@/components/interfaces/types/GalleryPicturesProps";

export default function GalleryPictures({
  pictures,
  gallery,
}: GalleryPicturesProps): React.ReactElement {
  return (
    <main>
      {!gallery ? <PicturesLoading /> : <Picture pictures={pictures} />}
    </main>
  );
}
