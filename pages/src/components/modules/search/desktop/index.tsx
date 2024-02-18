"use client";

import React, { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import handleKey from "../utils/handleKey";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import DesktopSearchProps from "@/components/interfaces/types/DesktopSearchProps";
import useTogglePageScrollOverflow from "@/hooks/useTogglePageScrollOverflow";
import AccountsSearchGroup from "../AccountsSearchGroup";
import SearchGroup from "./SearchGroup";

export default function DesktopSearch({
  datas,
  heading,
  emptyItemsMessege,
  placeholder,
}: DesktopSearchProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const search: ReadonlyURLSearchParams = useSearchParams();
  const router: AppRouterInstance = useRouter();
  // @ts-expect-error error types
  const searchRef: React.MutableRefObject<HTMLDivElement> = useRef();
  const searchOpenAndCloseAnimation: string = isOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";
  const searchStateValidation: string = isOpen ? `` : `hidden`;

  useEffect(() => {
    const activeSearchParams: string | null = search.get("active");
    if (!activeSearchParams || activeSearchParams !== "search") {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);

    return () => setIsOpen(isOpen);
  }, [setIsOpen, search, isOpen]);

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => handleKey({ ev, router });
    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!searchRef.current.contains(e.target as Node)) {
        router.push("/galleries");
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  useTogglePageScrollOverflow(isOpen);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center bg-black/50 @container",
        searchStateValidation,
      )}
    >
      <Command
        className={cn(
          "h-[20rem] w-[32rem] rounded-lg border shadow-md",
          searchOpenAndCloseAnimation,
        )}
        ref={searchRef}
      >
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>{emptyItemsMessege}</CommandEmpty>
          <CommandGroup heading={heading}>
            <SearchGroup datas={datas} />
          </CommandGroup>
          <CommandSeparator />
          <AccountsSearchGroup />
        </CommandList>
      </Command>
    </div>
  );
}
