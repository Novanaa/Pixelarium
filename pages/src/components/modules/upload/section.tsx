"use client";

import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import UploadTrigger from "./upload-trigger";
import UploadContent from "./content/index";
import cn from "@/utils/cn";
import useTogglePageScrollOverflow from "@/hooks/useTogglePageScrollOverflow";
import useActiveSearchParams from "@/hooks/useActiveSearchParams";
import OutsideClickHandler from "react-outside-click-handler";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import activeUploadTabs from "./constant/readonly/activeUploadTabs";
import { useQueryState, parseAsStringLiteral } from "nuqs";
import onDropUploadHandler from "./services/onDropUploadHandler";
import { AppDispatch } from "@/stores";
import { useDispatch } from "react-redux";

export default function UploadSection(): React.ReactElement {
  const [onDragEnter, setOnDragEnter] = useState<boolean>(false);
  const [activeTabs] = useQueryState(
    "upload_by",
    parseAsStringLiteral(activeUploadTabs).withDefault("picture"),
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const pathname: string = usePathname();
  const uploadOpenAndCloseAnimation: string = isOpen
    ? "animate-in fade-in-0 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%]"
    : "animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]";
  const isOutsideClickHandlerDisabled: boolean =
    activeTabs == "link" ? true : false;
  const onDroppedFilesStyles: string | boolean =
    onDragEnter && "bg-primary-foreground";

  useActiveSearchParams({ isOpen, setIsOpen, expectedValue: "upload" });

  useTogglePageScrollOverflow(isOpen);

  return (
    <>
      {isOpen && (
        <main
          className={cn(
            "fixed left-0 top-0 z-50 flex h-[100dvh] w-full flex-col items-center justify-center bg-black/60 @container",
            uploadOpenAndCloseAnimation,
          )}
        >
          <OutsideClickHandler
            onOutsideClick={() => router.push(pathname)}
            disabled={isOutsideClickHandlerDisabled}
          >
            <Tabs
              defaultValue="picture"
              value={activeTabs}
              onDragOver={(ev) => {
                ev.preventDefault();
                setOnDragEnter(true);
              }}
              onDrop={(ev: React.DragEvent<HTMLDivElement>) => {
                onDropUploadHandler({ dispatch, ev, pathname, router });
                setOnDragEnter(false);
              }}
              className={cn(
                "h-[100dvh] w-[100vw] rounded-lg border bg-black p-1 pt-2 @md:h-[28.5rem] @md:w-[25rem] @md:pt-1",
                onDroppedFilesStyles,
              )}
            >
              <UploadTrigger />
              <div className="mt-[0.2rem] h-1 w-full border-b"></div>
              <UploadContent />
            </Tabs>
          </OutsideClickHandler>
        </main>
      )}
    </>
  );
}
