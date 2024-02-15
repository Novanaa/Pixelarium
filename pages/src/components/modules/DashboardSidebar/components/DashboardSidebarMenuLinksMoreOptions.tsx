"use client";

import {
  AvatarIcon,
  BookmarkFilledIcon,
  GearIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiCash, HiMenuAlt1 } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UseThemeProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";
import DashboardSidebarMoreOptionsLink from "./DashboardSidebarMoreOptionsLink";

export default function DashboardSidebarMenuLinksMoreOptions(): React.ReactElement {
  const iconStyle: string = "mr-3 h-5 w-5";

  return (
    <Popover>
      <DashboardSidebarMenuLinksMoreOptionsTrigger />
      <PopoverContent className="ml-4 w-56 px-0">
        <div className="flex flex-col justify-center gap-2 pl-[0.6rem]">
          <DashboardSidebarMoreOptionsLink
            title="Settings"
            link="/accounts/settings"
            Icon={<GearIcon className={iconStyle} />}
          />
          <DashboardSidebarMoreOptionsLink
            title="Payment History"
            link="/accounts/payment/history"
            Icon={<HiCash className={iconStyle} />}
          />
          <DashboardSidebarMoreOptionsLink
            title="Favorites"
            link="/favorites"
            Icon={<BookmarkFilledIcon className={iconStyle} />}
          />
        </div>
        <div className="-pl-8 relative h-1 w-full border-b py-[0.5rem]"></div>
        <DashboardSidebarMenuLinksMoreOptionsThemes />
      </PopoverContent>
    </Popover>
  );
}

function DashboardSidebarMenuLinksMoreOptionsTrigger(): React.ReactElement {
  const menuLinksHoverStyle: string =
    "group inline-flex h-12 w-fit pl-[0.6rem] lg:pl-[0rem] right-[0.6rem] relative lg:right-[0rem] lg:w-[90%] items-center rounded-md lg:px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
  const iconStyle: string = "mr-3 h-7 w-7";

  return (
    <PopoverTrigger asChild>
      <div
        className={cn(
          "relative top-8 flex cursor-pointer items-center",
          menuLinksHoverStyle,
        )}
      >
        <HiMenuAlt1 className={iconStyle} />
        <Paragraph className="hidden text-[1.05rem] font-medium lg:block">
          More
        </Paragraph>
      </div>
    </PopoverTrigger>
  );
}

function DashboardSidebarMenuLinksMoreOptionsThemes(): React.ReactElement {
  const { theme, setTheme }: UseThemeProps = useTheme();

  const menuLinkListsHoverStyle: string =
    "group inline-flex h-10 w-[95%] items-center rounded-md px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  const iconStyle: string = "mr-3 h-5 w-5";

  return (
    <div className="relative mt-3 flex flex-col justify-center gap-2 pl-[0.6rem]">
      {theme == "light" ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={() => setTheme("dark")}
                className={cn(
                  "flex cursor-pointer items-center",
                  menuLinkListsHoverStyle,
                )}
              >
                <MoonIcon className={iconStyle} />
                <Paragraph className="text-[1rem] font-medium">
                  Dark Themes
                </Paragraph>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dark Themes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={() => setTheme("light")}
                className={cn(
                  "flex cursor-pointer items-center",
                  menuLinkListsHoverStyle,
                )}
              >
                <SunIcon className={iconStyle} />
                <Paragraph className="text-[1rem] font-medium">
                  Light Themes
                </Paragraph>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Light Themes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <DashboardSidebarMoreOptionsLink
        title="Logout"
        link="/auth/logout"
        Icon={<AvatarIcon className={iconStyle} />}
      />
    </div>
  );
}
