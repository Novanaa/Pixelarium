"use client";

import capitalize from "capitalize";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import onErrorHandler from "../../../../utils/on-error-picture-handler";
import type { default as IPicture } from "@/components/interfaces/types/Picture";
import EmptyPictures from "./empty-pictures";
import sortPicture from "../utils/sort-picture";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import sortBy from "@/constant/readonly/sort-by";
import HoverCardPicture from "./hover-card-picture";
import PictureContextMenu from "./picture-context-menu";

interface PictureProps extends React.ComponentProps<"div"> {
  pictures: Array<IPicture> | undefined;
}

export default function Picture({
  pictures,
}: PictureProps): Array<React.ReactElement> | React.ReactElement {
  const [pictureSortBy] = useQueryState(
    "sort_by",
    parseAsStringLiteral(sortBy).withDefault("recent"),
  );

  const sortedPictures: Array<IPicture> | undefined = sortPicture({
    array: pictures,
    by: pictureSortBy,
  });

  if (!pictures?.length) return <EmptyPictures />;

  return (
    <section className="grid grid-cols-2 gap-3 @container @2xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {sortedPictures?.map((p, i) => (
        <HoverCardPicture
          picture={p}
          key={i}
          title={`${capitalize(p.title)} - ${capitalize(p.description)}`}
        >
          <PictureContextMenu picture={p}>
            <div className="relative flex h-[9rem] w-full cursor-pointer items-center justify-center overflow-hidden rounded border bg-primary/5 transition-all @sm:h-[10rem] @md:h-[12rem] @xl:h-[13.5rem] hover:bg-primary/10 hover:grayscale">
              <LazyLoadImage
                src={p.url}
                className="h-[9rem] w-full rounded bg-center object-cover bg-blend-overlay shadow-md @sm:h-[10rem] @md:h-[12rem] @xl:h-[13.5rem]"
                alt={capitalize(p.title)}
                title={capitalize(p.title)}
                effect="black-and-white"
                onError={({
                  target,
                }: React.SyntheticEvent<HTMLImageElement, Event>) =>
                  onErrorHandler(target)
                }
              />
            </div>
          </PictureContextMenu>
        </HoverCardPicture>
      ))}
    </section>
  );
}
