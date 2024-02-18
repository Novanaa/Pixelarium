import React from "react";
import Picture from "./Picture";
import PicturesLoading from "./Loading";
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
