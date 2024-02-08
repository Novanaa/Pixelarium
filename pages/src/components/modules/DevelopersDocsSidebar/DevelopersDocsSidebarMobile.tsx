"use client";

import Container from "@/components/ui/Container";
import React, { useEffect } from "react";
import {
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores";
import {
  setSidebarSearchIsOpenState,
  setSidebarIsOpenState,
} from "@/stores/reducers/docsSidebar";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { HeadingFour } from "@/components/ui/Typographies/Heading";
import Link from "next/link";
import dummyData from "@/resources/developersDocsNavigationMenuLinks.json";

export default function DevelopersDocsSidebarMobile(): React.ReactElement {
  return (
    <>
      <DevelopersDocsSidebarMobileMenu />
      <DevelopersDocsSidebarMobileNavigationMenu />
    </>
  );
}

function DevelopersDocsSidebarMobileNavigationMenu() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Container
      className={cn(
        "relative top-[3.5rem] flex w-full items-center justify-between border-b py-1 md:hidden",
      )}
    >
      <div
        onClick={() => dispatch(setSidebarIsOpenState(true))}
        className={cn("flex h-0 items-center", navigationMenuTriggerStyle())}
      >
        <DoubleArrowRightIcon className="mr-2 h-4 w-4" />
        <span className="font-medium">Menu</span>
      </div>
      <MagnifyingGlassIcon
        onClick={() => dispatch(setSidebarSearchIsOpenState(true))}
        className={cn("h-4 w-4", navigationMenuTriggerStyle())}
      />
    </Container>
  );
}

function DevelopersDocsSidebarMobileMenu(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const isSidebarOpen: boolean = useSelector(
    (state: RootState) => state.docsSidebar.isSidebarOpen,
  );

  // @ts-expect-error miss types
  useEffect(() => {
    isSidebarOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, [isSidebarOpen]);

  return (
    <section className="absolute">
      <Sheet
        open={isSidebarOpen}
        onOpenChange={(isOpen: boolean) =>
          dispatch(setSidebarIsOpenState(isOpen))
        }
      >
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
  const dispatch: AppDispatch = useDispatch();

  const isSidebarSearchOpen: boolean = useSelector(
    (state: RootState) => state.docsSidebar.isSidebarSearchOpen,
  );

  return (
    <div className="flex">
      <Input
        onClick={() => {
          dispatch(setSidebarSearchIsOpenState(!isSidebarSearchOpen));
          dispatch(setSidebarIsOpenState(false));
        }}
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
