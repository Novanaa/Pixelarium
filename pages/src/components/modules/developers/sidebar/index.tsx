"use client";

import { HeadingFour } from "@/components/molecules/typographies/Heading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import dummyData from "@/resources/developersDocsNavigationMenuLinks.json";
import { cn } from "@/lib/utils";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import activeQueryParamsName from "@/constant/readonly/activeQueryParamsName";

export default function DevelopersDocsSidebar(): React.ReactElement {
  return (
    <>
      <section className="invisible fixed z-30 h-[90vh] overflow-y-scroll py-[2rem] pr-7 opacity-90 lg:visible">
        <div className="flex flex-col gap-6">
          <DevelopersDocsSidebarSearchInput />
          <div className="mt-0 h-1 w-full border-b"></div>
          <DevelopersDocsSidebarContent />
        </div>
      </section>
    </>
  );
}

function DevelopersDocsSidebarSearchInput(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveQueryParams] = useQueryState(
    "active",
    parseAsStringLiteral(activeQueryParamsName),
  );

  return (
    <div className="flex">
      <Input
        onClick={() => setActiveQueryParams("search")}
        readOnly={true}
        className="relative inline-flex w-[14rem] cursor-pointer items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground hover:placeholder:text-primary focus:outline-none focus:outline-0 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50"
        placeholder="Search (Press '/' to focus)"
      />
    </div>
  );
}

function DevelopersDocsSidebarContent(): Array<React.ReactElement> {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    const locationPathname: string = window.location.pathname;
    setPathname(locationPathname);

    return () => setPathname(pathname);
  }, [pathname]);

  return dummyData.map((d, i) => {
    return (
      <div className="flex flex-col gap-3" key={i}>
        <HeadingFour className="font-semibold">{d.title}</HeadingFour>
        <div className="flex flex-col items-start justify-start gap-3 font-medium">
          {d.items.map((i, ind) => {
            const hrefLink: string = i.url;
            const activeLink: string =
              hrefLink == pathname ? "text-primary/95 underline" : "";

            return (
              <Link
                href={hrefLink}
                key={ind}
                className={cn(
                  "text-primary/70 underline-offset-4 hover:text-primary/95 hover:underline",
                  activeLink,
                )}
              >
                {i.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  });
}
