import React from "react";
import GalleryHeader from "./Header";
import GalleryPictures from "./PictureList";

export default function UserGallery(): React.ReactElement {
  return (
    <main className="flex h-full flex-col gap-4 pb-24 pt-[6rem] @container sm:px-10 sm:pt-12">
      <GalleryHeader />
      <GalleryPictures />
    </main>
  );
}
