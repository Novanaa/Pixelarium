import React from "react";
import GalleryHeader from "./Header";
import GalleryPictures from "./PictureList";
import Search from "../search";
import getGalleryPictures, {
  GalleryResponseAPI,
} from "@/services/getGalleryPictures";
import Picture from "@/components/interfaces/types/Picture";
import SearchDatas from "@/components/interfaces/types/SearchDatas";
import Upload from "../upload";

export default async function UserGallery(): Promise<React.ReactElement> {
  const gallery: Awaited<GalleryResponseAPI | null> =
    await getGalleryPictures();

  const pictures: Array<Picture> | undefined = gallery?.data.gallery.pictures;

  const searchDatas: Array<SearchDatas> = [];

  return (
    <>
      <main className="flex h-full flex-col gap-4 pb-24 pt-[6rem] @container sm:px-10 sm:pt-12">
        <GalleryHeader pictures={pictures} />
        <GalleryPictures gallery={gallery} pictures={pictures} />
      </main>
      <Search
        datas={searchDatas}
        heading="Pictures"
        emptyItemsMessege="You doesn't have any pictures"
      />
      <Upload />
    </>
  );
}
