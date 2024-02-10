"use client";

import React, { use } from "react";
import LogoIcons from "@/components/ui/LogoIcons";
import { HeadingThree } from "@/components/ui/Typographies/Heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { jakartaSans } from "@/configs/fonts";
import { HiCash, HiHome, HiMenuAlt1, HiSparkles } from "react-icons/hi";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import {
  AvatarIcon,
  BookmarkFilledIcon,
  CameraIcon,
  GearIcon,
  HeartFilledIcon,
  MoonIcon,
  RocketIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import UserAvatar from "@/components/ui/UserAvatar";
import getUserData from "@/services/getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import DashboardSidebarMenuLinkProps from "@/components/interfaces/types/DashboardSidebarMenuLinkProps";

export default function DashboardSidebar(): React.ReactElement {
  return (
    <section className="sticky left-0 top-0 hidden h-[100vh] w-[5rem] rounded border-r pt-10 sm:block lg:w-[18rem]">
      <div className="flex h-full flex-col">
        <div className="pl-5">
          <DashboardSidebarHeader />
        </div>
        <div className="-pl-8 relative h-1 w-full border-b py-[0.7rem]"></div>
        <div className="pl-5">
          <DashboardSidebarMenuLinksList />
        </div>
      </div>
    </section>
  );
}

function DashboardSidebarHeader(): React.ReactElement {
  return (
    <a href="/" className={cn("flex h-fit items-center gap-1")}>
      <LogoIcons
        width={40}
        height={40}
        className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"
      />
      <HeadingThree
        className={cn(
          "hidden font-sans font-semibold opacity-85 lg:block",
          jakartaSans.className,
        )}
      >
        Pixelarium
      </HeadingThree>
    </a>
  );
}

const userQuery: Promise<DecodedUser | null> = getUserData();
function DashboardSidebarMenuLinksList(): React.ReactElement {
  const user: DecodedUser | null = use(userQuery);

  const iconStyle: string = "mr-3 h-7 w-7";

  return (
    <div className="relative top-5 flex flex-col gap-[0.6rem] opacity-90">
      <DashboardSidebarMenuLink
        title="Home"
        link="/"
        Icon={<HiHome className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Gallery"
        link="/profile/user?tabActive=gallery"
        Icon={<HiSparkles className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Albums"
        link="/profile/user?tabActive=albums"
        Icon={<CameraIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Upload"
        link="/profile/user?active=upload"
        Icon={<RocketIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Upgrade"
        link="/pricing"
        Icon={<HeartFilledIcon className={iconStyle} />}
      />
      <DashboardSidebarMenuLink
        title="Your Profile"
        link="/profile"
        Icon={
          <UserAvatar
            user={user}
            options={{ lazyLoading: true }}
            className="mr-3 h-7 w-7"
          />
        }
      />
      <DashboardSidebarMenuLinksMoreOptions />
    </div>
  );
}

function DashboardSidebarMenuLinksMoreOptions(): React.ReactElement {
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
            link="/profile/user?tabActive=favorites"
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

function DashboardSidebarMenuLink({
  title,
  Icon,
  link,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinksHoverStyle: string =
    "group inline-flex h-12 w-fit pl-[0.6rem] lg:pl-[0rem] right-[0.6rem] relative lg:right-[0rem] lg:w-[90%] items-center rounded-md lg:px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <Link href={link} className={cn("flex items-center", menuLinksHoverStyle)}>
      {Icon}
      <Paragraph className="hidden text-[1.05rem] font-medium lg:block">
        {title}
      </Paragraph>
    </Link>
  );
}

function DashboardSidebarMoreOptionsLink({
  link,
  title,
  Icon,
}: DashboardSidebarMenuLinkProps): React.ReactElement {
  const menuLinkListsHoverStyle: string =
    "group inline-flex h-10 w-[95%] items-center rounded-md px-[0.6rem] py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <Link
      href={link}
      className={cn("flex items-center", menuLinkListsHoverStyle)}
    >
      {Icon}
      <Paragraph className="text-[1rem] font-medium">{title}</Paragraph>
    </Link>
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
        <div
          onClick={() => setTheme("dark")}
          className={cn(
            "flex cursor-pointer items-center",
            menuLinkListsHoverStyle,
          )}
        >
          <MoonIcon className={iconStyle} />
          <Paragraph className="text-[1rem] font-medium">Dark Themes</Paragraph>
        </div>
      ) : (
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
      )}
      <DashboardSidebarMoreOptionsLink
        title="Logout"
        link="/auth/logout"
        Icon={<AvatarIcon className={iconStyle} />}
      />
    </div>
  );
}
