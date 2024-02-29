"use client";

import TooltipOnHover from "@/components/molecules/tooltip-on-hover";
import Paragraph from "@/components/molecules/typographies/paragraph";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  InfoCircledIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import React from "react";
import HeaderMoreOptions from "./header-more-options";
import GalleryHeader from "@/components/interfaces/types/GalleryHeader";
import { useQueryState, parseAsStringLiteral } from "nuqs";
import activeQueryParamsName from "@/constant/readonly/active-query-params-name";

function GalleryHeader({ pictures }: GalleryHeader): React.ReactElement {
  const [_, setActiveQueryParams] = useQueryState(
    "active",
    parseAsStringLiteral(activeQueryParamsName),
  );

  return (
    <>
      <section className="flex items-center justify-between gap-5">
        <div>
          <Paragraph className="hidden text-[0.75rem] font-medium leading-5 text-primary/70 sm:block sm:text-sm">
            Only you can see your private pictures
          </Paragraph>
          <div className="block sm:hidden">
            <TooltipOnHover title="Only you can see your private pictures">
              <Button variant="ghost" size="icon">
                <InfoCircledIcon className="h-5 w-5" />
              </Button>
            </TooltipOnHover>
          </div>
        </div>
        <div className="flex gap-2">
          <TooltipOnHover title="Add a new picture">
            <Button
              className="font-medium"
              variant="ghost"
              onClick={() => setActiveQueryParams("upload")}
            >
              <PlusIcon className="mr-1 h-4 w-4" />
              New Picture
            </Button>
          </TooltipOnHover>
          <TooltipOnHover title="Search pictures">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveQueryParams("search")}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
          </TooltipOnHover>
          <HeaderMoreOptions pictures={pictures} />
        </div>
      </section>
    </>
  );
}

function Loading(): React.ReactElement {
  return (
    <div className="flex items-center justify-between gap-5 @container">
      <Skeleton className="h-7 w-7 rounded sm:w-[16rem]" />
      <div className="flex gap-3">
        <Skeleton className="h-7 w-[5rem] rounded @sm:w-[7rem] sm:w-[8rem]" />
        <Skeleton className="h-7 w-7 rounded" />
        <Skeleton className="h-7 w-7 rounded" />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(GalleryHeader), {
  ssr: false,
  loading: () => <Loading />,
});
