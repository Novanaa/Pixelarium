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
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import DesktopSearchProps from "@/components/interfaces/types/DesktopSearchProps";
import useTogglePageScrollOverflow from "@/hooks/useTogglePageScrollOverflow";
import AccountsSearchGroup from "../AccountsSearchGroup";
import useKeyboardToggle from "@/hooks/useKeyboardToggle";
import useActiveSearchParams from "@/hooks/useActiveSearchParams";
import DesktopSearchGroup from "./SearchGroup";
import OutsideClickHandler from "react-outside-click-handler";

export default function DesktopSearch({
  datas,
  heading,
  emptyItemsMessege,
  placeholder,
}: DesktopSearchProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchOpenAndCloseAnimation: string = isOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";
  const searchStateValidation: string = isOpen
    ? ``
    : `hidden opacity-0 w-0 h-0 overflow-hidden`;

  useActiveSearchParams({ isOpen, setIsOpen, expectedValue: "search" });

  useKeyboardToggle({ pagePathname: pathname, router });

  useTogglePageScrollOverflow(isOpen);

  return (
    <>
      {isOpen && (
        <div
          className={cn(
            "fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center bg-black/50 @container",
            searchStateValidation,
          )}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              router.push(pathname);
            }}
          >
            <Command
              className={cn(
                "h-[20rem] w-[32rem] rounded-lg border shadow-md",
                searchOpenAndCloseAnimation,
              )}
            >
              <CommandInput placeholder={placeholder} />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading={heading}>
                  {!datas.length ? (
                    <div className="mb-4 mt-2 text-center opacity-80">
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
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
}
