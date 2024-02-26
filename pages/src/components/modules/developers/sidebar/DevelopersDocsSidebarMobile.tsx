"use client";

import React, { useState } from "react";
import {
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { HeadingFour } from "@/components/molecules/typographies/Heading";
import Link from "next/link";
import dummyData from "@/resources/developersDocsNavigationMenuLinks.json";
import Container from "@/components/molecules/container";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import activeQueryParamsName from "@/constant/readonly/activeQueryParamsName";
import useQueryParamsState from "@/hooks/useQueryParamsState";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";

export default function DevelopersDocsSidebarMobile(): React.ReactElement {
  return (
    <>
      <DevelopersDocsSidebarMobileMenu />
      <DevelopersDocsSidebarMobileNavigationMenu />
    </>
  );
}

function DevelopersDocsSidebarMobileNavigationMenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveQueryParams] = useQueryState(
    "active",
    parseAsStringLiteral(activeQueryParamsName),
  );

  const bluryBackground: string =
    "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10";

  return (
    <main
      className={cn(
        "fixed top-[3.5rem] z-20 mx-auto w-full border-b bg-[var(--border)] py-1 lg:hidden",
        bluryBackground,
      )}
    >
      <Container className="flex items-center justify-between">
        <div
          onClick={() => setActiveQueryParams("menu")}
          className={cn("flex h-0 items-center", navigationMenuTriggerStyle())}
        >
          <DoubleArrowRightIcon className="mr-2 h-4 w-4" />
          <span className="font-medium">Menu</span>
        </div>
        <MagnifyingGlassIcon
          onClick={() => setActiveQueryParams("search")}
          className={cn("h-4 w-4", navigationMenuTriggerStyle())}
        />
      </Container>
    </main>
  );
}

function DevelopersDocsSidebarMobileMenu(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();

  useQueryParamsState({
    expectedValue: "menu",
    isOpen,
    setIsOpen,
    paramsName: "active",
  });

  return (
    <section className="absolute">
      <Sheet open={isOpen} onOpenChange={() => router.push(pathname)}>
        <SheetContent
          side="left"
          className="flex flex-col gap-4 overflow-y-scroll"
        >
          <SheetHeader className="mt-6">
            <DevelopersDocsSidebarMobileMenuSearchInput />
          </SheetHeader>
          <DevelopersDocsSidebarMobileMenuContents />
        </SheetContent>
      </Sheet>
    </section>
  );
}

function DevelopersDocsSidebarMobileMenuSearchInput(): React.ReactElement {
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
        className="relative inline-flex cursor-pointer items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground hover:placeholder:text-primary focus:outline-none focus:outline-0 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50"
        placeholder="Search (Press '/' to focus)"
      />
    </div>
  );
}

function DevelopersDocsSidebarMobileMenuContents(): Array<React.ReactElement> {
  return dummyData.map((d, i) => {
    return (
      <div className="flex flex-col gap-3" key={i}>
        <HeadingFour className="font-semibold">{d.title}</HeadingFour>
        <div className="flex flex-col items-start justify-start gap-3 font-medium">
          {d.items.map((i, ind) => {
            return (
              <Link
                href={i.url}
                key={ind}
                className="text-primary/70 underline-offset-4 hover:text-primary/95 hover:underline"
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
