"use client";

import React, { useEffect, use } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import cn from "@/utils/cn";
import {
  AvatarIcon,
  CameraIcon,
  GearIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { jakartaSans } from "@/configs/fonts";
import { HiFire, HiHeart, HiSparkles } from "react-icons/hi";
import type PictureProfileSidebarProps from "@/components/interfaces/types/PictureProfileSidebarProps";
import getUserSubscriptionStatus, {
  GetUserSubscriptionStatusReturnType,
} from "@/services/getUserSubscriptionStatus";
import PictureProfileSidebarMenuLinksProps from "@/components/interfaces/types/PictureProfileSidebarMenuLinksProps";

export default function PictureProfileSidebar({
  isOpen,
  setIsOpen,
  user,
  isLoading,
}: PictureProfileSidebarProps): React.ReactElement {
  // @ts-expect-error types error
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <main className="absolute @container">
      <Sheet onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)} open={isOpen}>
        <SheetContent className="rounded-md border lg:w-[20.5rem]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              {!isLoading ? (
                <>
                  <picture>
                    <img
                      src={user?.picture}
                      alt={"@" + user?.name}
                      className="h-9 w-9 rounded-full border"
                      width={9}
                      height={9}
                    />
                  </picture>
                  <Paragraph className="font-semibold">{user?.name}</Paragraph>
                </>
              ) : (
                <>
                  <Skeleton className="h-9 w-9 rounded-full" />
                  <Skeleton className="h-3 w-16 rounded" />
                </>
              )}
            </SheetTitle>
          </SheetHeader>
          <PictureProfileSidebarSubscriptionStatus />
          <div className="mt-1 h-1 w-full border-b"></div>
          <PictureProfileSidebarMenuLinks setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
    </main>
  );
}

const subscriptionQuery = getUserSubscriptionStatus();
function PictureProfileSidebarSubscriptionStatus(): React.ReactElement {
  const subscription: GetUserSubscriptionStatusReturnType | null =
    use(subscriptionQuery);

  return (
    <div
      className={cn(
        navigationMenuTriggerStyle(),
        "mt-4 h-8 w-full justify-start text-center font-semibold",
      )}
    >
      {subscription?.isLoading ? (
        <Skeleton className="h-6 w-full rounded" />
      ) : (
        <>
          <HiFire className="mr-2 h-5 w-5" />
          {subscription?.status.plan}
        </>
      )}
    </div>
  );
}

function PictureProfileSidebarMenuLinks({
  setIsOpen,
}: PictureProfileSidebarMenuLinksProps): React.ReactElement {
  return (
    <div
      className={cn(
        "relative top-[0.5rem] flex flex-col gap-1 font-sans opacity-95",
        jakartaSans.className,
      )}
    >
      <Link
        href="/profile"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <AvatarIcon className="mr-2 h-5 w-5" />
        Your Profile
      </Link>
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <GearIcon className="mr-2 h-5 w-5" />
        Settings
      </Link>
      <div className="h-1 w-full border-b py-[0.15rem]"></div>
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "relative mt-[0.2rem] h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <HiSparkles className="mr-2 h-5 w-5" />
        Gallery
      </Link>
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <CameraIcon className="mr-2 h-5 w-5" />
        Albums
      </Link>
      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <RocketIcon className="mr-2 h-5 w-5" />
        Upload
      </Link>
      <Link
        href="/pricing"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <HiHeart className="mr-2 h-5 w-5" />
        Upgrade
      </Link>
      <div className="h-1 w-full border-b py-[0.15rem]"></div>
      <Link
        href="/auth/logout"
        onClick={() => setIsOpen(false)}
        className={cn(
          navigationMenuTriggerStyle(),
          "mt-[0.2rem] h-8 w-full justify-start text-center font-semibold",
        )}
      >
        <AvatarIcon className="mr-2 h-5 w-5" />
        Logout
      </Link>
    </div>
  );
}
