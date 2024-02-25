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
import AccountsSearchGroup from "../AccountsSearchGroup";
import { usePathname, useRouter } from "next/navigation";
import useActiveSearchParams from "@/hooks/useActiveSearchParams";
import useTogglePageScrollOverflow from "@/hooks/useTogglePageScrollOverflow";
import { cn } from "@/lib/utils";
import MobileSearchProps from "@/components/interfaces/types/MobileSearchProps";
import MobileSearchGroup from "./SearchGroup";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function MobileSearch({
  emptyItemsMessege,
  datas,
  heading,
  placeholder,
}: MobileSearchProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchOpenAndCloseAnimation: string = isOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";
  const searchStateValidation: string = isOpen ? `` : `hidden`;

  useActiveSearchParams({ isOpen, setIsOpen, expectedValue: "search" });

  useTogglePageScrollOverflow(isOpen);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center",
        searchStateValidation,
      )}
    >
      <Command
        className={cn(
          "h-[100dvh] w-[100vw] rounded-lg border shadow-md",
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
              <MobileSearchGroup datas={datas} />
            )}
          </CommandGroup>
          <CommandSeparator />
          <AccountsSearchGroup />
        </CommandList>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(pathname)}
          className="absolute right-3 top-2 h-7 w-7 opacity-50"
        >
          <Cross2Icon className="h-4 w-4" />
        </Button>
      </Command>
    </div>
  );
}
