import React from "react";
import GalleryHeader from "./Header";
import GalleryPictures from "./PictureList";
import Search from "../search";
import SearchDatas from "@/components/interfaces/types/SearchDatas";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function UserGallery(): React.ReactElement {
  const test: Array<SearchDatas> = [
    {
      Icon: <ReloadIcon className="mr-2 h-4 w-4" />,
      link: "/",
      title: "testtt",
    },
  ];

  return (
    <>
      <main className="flex h-full flex-col gap-4 pb-24 pt-[6rem] @container sm:px-10 sm:pt-12">
        <GalleryHeader />
        <GalleryPictures />
      </main>
      <Search datas={test} heading="testt dulu banh" />
    </>
  );
}
