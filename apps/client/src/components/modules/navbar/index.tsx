"use client";

import React, { useEffect } from "react";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import cn from "@/utils/cn";
import { jakartaSans } from "@/configs/fonts";
import Image from "next/image";
import { HeadingFour } from "@/components/molecules/typographies/Heading";
import Link from "next/link";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import { Button } from "@/components/ui/button";
import {
  AvatarIcon,
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import githubRepositoryLink from "@/constant/readonly/githubRepositoryLink";
import { useState } from "react";
import type { default as NavbarHeadersParams } from "@/components/interfaces/types/NavbarHeaders";
import type { default as NavbarFooterParams } from "@/components/interfaces/types/NavbarFooter";
import type { default as NavbarMobileMenuParams } from "@/components/interfaces/types/NavbarMobileMenu";
import NavbarMobile from "./NavbarMobile";
import navbarLinksMenu from "@/resources/navbarLinksMenu.json";
import isLoggedIn from "@/services/isLoggedIn";
import getLogoSource from "@/utils/getLogoSource";
import { Skeleton } from "@/components/ui/skeleton";
import UserProfilePicture from "./UserProfilePicture";
import Container from "@/components/molecules/container";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [userSession, setUserSession] = useState<boolean | null>(null);

  const throttleUserSession: boolean = userSession == null ? true : false;

  const { theme, setTheme }: UseThemeProps = useTheme();

  useEffect(() => {
    isLoggedIn().then((data) => setUserSession(data));
  }, []);

  const bluryBackground: string =
    "bg-secondary bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10";

  return (
    <>
      <section
        className={cn(
          bluryBackground,
          `fixed z-20 w-full border-b bg-[var(--border)] py-[0.65rem] pb-[0.65rem] @container`,
        )}
      >
        <Container className="flex w-full justify-between">
          <NavigationMenu className="flex gap-5">
            {/* Navigation Headers */}
            <NavbarHeaders theme={theme} />

            {/* Navigation Menu */}
            <NavbarMenuLinks />
          </NavigationMenu>
          <NavigationMenu className="hidden @5xl:block">
            <NavbarFooter
              theme={theme}
              setTheme={setTheme}
              userSession={userSession}
              throttleUser={throttleUserSession}
            />
          </NavigationMenu>
          <NavigationMenu className="block @5xl:hidden">
            <NavbarMobileMenu
              isNavbarOpen={isNavbarOpen}
              isLoading={throttleUserSession}
              setIsNavbarOpen={setIsNavbarOpen}
              isLogin={userSession!}
            />
          </NavigationMenu>
        </Container>
      </section>
      <NavbarMobile
        isNavbarOpen={isNavbarOpen}
        userSession={userSession}
        setIsNavbarOpen={setIsNavbarOpen}
        throttleUser={throttleUserSession}
      />
    </>
  );
}

function NavbarHeaders({ theme }: NavbarHeadersParams): React.ReactElement {
  const iconsImageSrc: string = getLogoSource(theme!);

  return (
    <Link
      className="flex items-center gap-1 opacity-80 hover:opacity-90"
      href="/"
    >
      <Image alt="Pixelarium" src={iconsImageSrc} width={33.5} height={33.5} />
      <HeadingFour
        className={`${jakartaSans.variable} font-sans text-[1.15rem] font-semibold sm:text-[1.25rem]`}
      >
        Pixelarium
      </HeadingFour>
    </Link>
  );
}

function NavbarMenuLinks(): React.ReactElement {
  return (
    <NavigationMenuList className="hidden @5xl:block">
      <NavigationMenuItem
        className={cn(
          jakartaSans.variable,
          `cursor-pointer font-sans font-medium opacity-85 hover:font-semibold hover:opacity-100`,
        )}
      >
        <NavigationMenuLink
          href={navbarLinksMenu[0].link}
          className={cn(navigationMenuTriggerStyle(), "text-[0.9rem]")}
        >
          {navbarLinksMenu[0].title}
        </NavigationMenuLink>
        <NavigationMenuLink
          href={navbarLinksMenu[1].link}
          className={cn(navigationMenuTriggerStyle(), "text-[0.9rem]")}
        >
          {navbarLinksMenu[1].title}
        </NavigationMenuLink>
        <NavigationMenuLink
          href={navbarLinksMenu[2].link}
          className={cn(navigationMenuTriggerStyle(), "text-[0.9rem]")}
        >
          {navbarLinksMenu[2].title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

function NavbarFooter({
  setTheme,
  theme,
  userSession,
  throttleUser,
}: NavbarFooterParams): React.ReactElement {
  return (
    <NavigationMenuList>
      <NavigationMenuItem className="flex cursor-pointer items-center gap-[0.5rem]">
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "text-[0.9rem]")}
          href={githubRepositoryLink}
        >
          <GitHubLogoIcon width={20} height={20} />
        </NavigationMenuLink>
        {theme == "light" ? (
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
            <MoonIcon onClick={() => setTheme("dark")} />
          </NavigationMenuLink>
        ) : (
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
            <SunIcon onClick={() => setTheme("light")} />
          </NavigationMenuLink>
        )}
        {userSession ? (
          <UserProfilePicture isLoading={throttleUser} />
        ) : (
          <NavigationMenuLink
            className={`${jakartaSans.variable} font-sans font-semibold`}
            href="/auth/login"
          >
            {throttleUser ? (
              <Skeleton className="h-8 w-8 rounded-full" />
            ) : (
              <Button variant="default" disabled={throttleUser}>
                <AvatarIcon className="mr-2 h-4 w-4" />
                Login / Sign In
              </Button>
            )}
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

function NavbarMobileMenu({
  isNavbarOpen,
  setIsNavbarOpen,
  isLoading,
  isLogin,
}: NavbarMobileMenuParams): React.ReactElement {
  return (
    <NavigationMenuList>
      <NavigationMenuItem
        className={cn(navigationMenuTriggerStyle(), "opacity-80")}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {isNavbarOpen ? (
          <Cross1Icon width={19} height={19} />
        ) : (
          <>
            <HamburgerMenuIcon width={19} height={19} />
          </>
        )}
      </NavigationMenuItem>
      {isLogin ? <UserProfilePicture isLoading={isLoading!} /> : null}
    </NavigationMenuList>
  );
}

export default Navbar;
