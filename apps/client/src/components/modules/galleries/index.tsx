import React from "react";
import GalleryHeader from "./components/header";
import GalleryPictures from "./components/picture-list";
import Search from "../search";
import getGalleryPictures, {
  GalleryResponseAPI,
} from "@/services/get-gallery-pictures";
import Picture from "@/components/interfaces/types/Picture";
import SearchDatas from "@/components/interfaces/types/SearchDatas";
import Upload from "../upload";
import { ImageIcon } from "@radix-ui/react-icons";

export default async function UserGallery(): Promise<React.ReactElement> {
  const gallery: Awaited<GalleryResponseAPI | null> =
    await getGalleryPictures();

  const pictures: Array<Picture> | undefined = gallery?.data.gallery.pictures;

  const searchDatas: Array<SearchDatas> = [
    {
      heading: "Pictures",
      search:
        pictures?.map((pic) => ({
          title: pic.title,
          link: "/", // it will be changed in the future
          Icon: <ImageIcon className="mr-2 h-4 w-4" />,
        })) || [],
    },
  ];

  return (
    <>
      <main className="flex h-full flex-col gap-4 pb-24 pt-[6rem] @container sm:px-10 sm:pt-12">
        <GalleryHeader pictures={pictures} />
        <GalleryPictures gallery={gallery} pictures={pictures} />
      </main>
      <Search
        datas={searchDatas}
        emptyItemsMessege="You doesn't have any pictures"
      />
      <Upload />
    </>
  );
}
