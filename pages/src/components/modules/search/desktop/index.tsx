"use client";

import React, { useState } from "react";
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
import { useRouter, usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import DesktopSearchProps from "@/components/interfaces/types/DesktopSearchProps";
import useTogglePageScrollOverflow from "@/hooks/useTogglePageScrollOverflow";
import AccountsSearchGroup from "../AccountsSearchGroup";
import useToggleOuterPageClick from "@/hooks/useToggleOuterPageClick";
import useKeyboardToggle from "@/hooks/useKeyboardToggle";
import useActiveSearchParams from "../hooks/useActiveSearchParams";
import DesktopSearchGroup from "./SearchGroup";

export default function DesktopSearch({
  datas,
  heading,
  emptyItemsMessege,
  placeholder,
}: DesktopSearchProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const search: ReadonlyURLSearchParams = useSearchParams();
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  // @ts-expect-error error types
  const searchRef: React.MutableRefObject<HTMLDivElement> = useRef();
  const searchOpenAndCloseAnimation: string = isOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";
  const searchStateValidation: string = isOpen ? `` : `hidden`;

  useActiveSearchParams({ isOpen, setIsOpen, searchParams: search });

  useKeyboardToggle({ pagePathname: pathname, router });

  useToggleOuterPageClick({ ref: searchRef, pagePathname: pathname, router });

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
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={heading}>
            {!datas.length ? (
              <div className="my-2 text-center opacity-80">
                {emptyItemsMessege}
              </div>
            ) : (
              <DesktopSearchGroup datas={datas} />
            )}
          </CommandGroup>
          <CommandSeparator />
          <AccountsSearchGroup />
        </CommandList>
      </Command>
    </div>
  );
}
