"use client";

import UserAvatar from "@/components/ui/UserAvatar";
import React, { use } from "react";
import { HiHome, HiPlusCircle, HiSparkles } from "react-icons/hi";
import getUserData from "@/services/getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import { CameraIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DashboardSidebarMenuLinkProps from "@/components/interfaces/types/DashboardSidebarMenuLinkProps";
import Link from "next/link";

export default function DashboardSidebarMobile(): React.ReactElement {
  const bluryBackground: string =
    "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[var(--border)]";

  return (
    <section
      className={cn(
        "fixed bottom-0 z-30 w-full border py-[0.7rem] @container sm:hidden",
        bluryBackground,
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <DashboardSidebarMobileMenuLinksList />
      </div>
    </section>
  );
}

const userQuery: Promise<DecodedUser | null> = getUserData();
function DashboardSidebarMobileMenuLinksList(): React.ReactElement {
  const user: DecodedUser | null = use(userQuery);

  const iconStyle: string = "h-[1.85rem] w-[1.85rem]";

  return (
    <div className="flex w-full justify-evenly opacity-85 @md:w-[85%]">
      <DashboardSidebarMobileMenuLink
        title="Home"
        link="/"
        Icon={<HiHome className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Albums"
        link="/profile/user?tabActive=albums"
        Icon={<CameraIcon className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Upload"
        link="/profile/user?active=upload"
        Icon={<HiPlusCircle className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title="Gallery"
        link="/profile/user?tabActive=gallery"
        Icon={<HiSparkles className={iconStyle} />}
      />
      <DashboardSidebarMobileMenuLink
        title={user?.name || "Your profile"}
        link="/profile"
        Icon={
          <UserAvatar
            user={user}
            options={{ lazyLoading: true }}
            className={iconStyle}
          />
        }
      />
    </div>
  );
}

function DashboardSidebarMobileMenuLink({
  title,
  link,
  Icon,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinksHoverStyle: string =
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-2 py-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={link} className={cn(menuLinksHoverStyle, "relative")}>
            {Icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
