"use client";

import { HeadingFour } from "@/components/molecules/Typographies/Heading";
import { cn } from "@/lib/utils";
import React from "react";
import styles from "./styles/index.module.css";
import TocElementData from "@/interfaces/types/Toc";
import { titleCase } from "title-case";
import Link from "next/link";

interface TableOfContentsProps extends React.ComponentProps<"div"> {
  toc: Array<TocElementData>;
}

export default function TableOfContents({
  toc,
}: TableOfContentsProps): React.ReactElement {
  return (
    <section
      className={cn(
        "fixed right-[0.5rem] top-[6.3rem] hidden w-[12rem] lg:flex lg:flex-col lg:gap-3 xl:right-[5rem]",
        styles.container,
      )}
    >
      <TableOfContentsHeader />
      <TableOfContentsMenuLinks toc={toc} />
    </section>
  );
}

function TableOfContentsHeader(): React.ReactElement {
  return <HeadingFour>On this pages</HeadingFour>;
}

function TableOfContentsMenuLinks({
  toc,
}: TableOfContentsProps): Array<React.ReactElement> {
  return toc.map((content, i) => {
    const title: string | undefined = titleCase(content.children[1].value!);
    const link: string = content.properties.id;
    const hrefLink: string = "#".concat(link);
    return (
      <div className="flex flex-col gap-1" key={i}>
        <Link
          href={hrefLink}
          className={cn(
            "text-wrap text-[0.95rem] font-medium text-primary/70 underline-offset-4 hover:text-primary/95 hover:underline",
          )}
        >
          {title}
        </Link>
      </div>
    );
  });
}
