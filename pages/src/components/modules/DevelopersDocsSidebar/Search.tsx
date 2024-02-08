"use client";

import React, { useEffect, useRef } from "react";
import {
  GearIcon,
  PersonIcon,
  FileIcon,
  Cross2Icon,
  RocketIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/stores";
import Link from "next/link";
import { setSidebarSearchIsOpenState } from "@/stores/reducers/docsSidebar";
import dummyData from "@/resources/developersDocsNavigationMenuLinks.json";
import handleKey from "./utils/handleKey";
import { cn } from "@/lib/utils";

export default function Search(): React.ReactElement {
  // @ts-expect-error error types
  const searchRef: React.MutableRefObject<HTMLDivElement> = useRef();
  const dispatch: AppDispatch = useDispatch();
  const isSidebarSearchOpen: boolean = useSelector(
    (state: RootState) => state.docsSidebar.isSidebarSearchOpen,
  );
  const searchStateValidation: string = isSidebarSearchOpen ? `` : `hidden`;
  const searchOpenAndCloseAnimation: string = isSidebarSearchOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";

  useEffect(() => {
    const clickHandler = (ev: KeyboardEvent) => handleKey({ ev, dispatch });
    document.addEventListener("keydown", clickHandler);
    return () => document.removeEventListener("keydown", clickHandler);
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!searchRef.current.contains(e.target as Node)) {
        dispatch(setSidebarSearchIsOpenState(false));
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  // @ts-expect-error miss types
  useEffect(() => {
    isSidebarSearchOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, [isSidebarSearchOpen]);

  return (
    <div
      className={cn(
        `fixed z-50 flex h-full w-full items-center justify-center bg-background/80`,
        searchStateValidation,
      )}
    >
      <Command
        ref={searchRef}
        className={cn(
          "h-[20rem] w-[90vw] rounded-lg border shadow-md sm:w-[33rem]",
          searchOpenAndCloseAnimation,
        )}
      >
        <CommandInput
          placeholder="Type a command or search..."
          autoFocus={isSidebarSearchOpen}
        />
        <div className="relative top-[-0.85rem] mr-4 flex items-end justify-end">
          <Cross2Icon
            className="fixed h-4 w-4 cursor-pointer opacity-70"
            onClick={() =>
              dispatch(setSidebarSearchIsOpenState(!isSidebarSearchOpen))
            }
          />
        </div>
        <CommandList>
          <EmptySearch />
          <SearchContents />
          <CommandSeparator />
          <SearchShortcut />
        </CommandList>
      </Command>
    </div>
  );
}

function EmptySearch(): React.ReactElement {
  return <CommandEmpty>No results found.</CommandEmpty>;
}

function SearchContents(): Array<React.ReactElement> {
  return dummyData.map((data) => {
    return (
      <CommandGroup heading={data.title} key={data.id}>
        {data.items.map((i) => {
          return (
            <Link key={i.itemsId} href={i.url}>
              <CommandItem className="cursor-pointer opacity-90">
                <FileIcon className="mr-2 h-5 w-5" />
                <span>{i.title}</span>
              </CommandItem>
            </Link>
          );
        })}
      </CommandGroup>
    );
  });
}

function SearchShortcut(): React.ReactElement {
  return (
    <CommandGroup heading="Shortcut">
      <Link href="/profile">
        <CommandItem className="cursor-pointer opacity-90">
          <PersonIcon className="mr-2 h-5 w-5" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </Link>
      <Link href="/upload">
        <CommandItem className="cursor-pointer opacity-90">
          <RocketIcon className="mr-2 h-5 w-5" />
          <span>Upload</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
      </Link>
      <Link href="/profile/settings">
        <CommandItem className="cursor-pointer opacity-90">
          <GearIcon className="mr-2 h-5 w-5" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </Link>
    </CommandGroup>
  );
}
