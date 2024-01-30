import React from "react";
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
import { HeadingFour } from "@/components/ui/Typographies/Heading";
import Link from "next/link";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  AvatarIcon,
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
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

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const { theme, setTheme }: UseThemeProps = useTheme();
  const userSession: boolean = true;

  const bluryBackground: string =
    "bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10";

  return (
    <>
      <section
        className={cn(
          bluryBackground,
          `@container fixed z-20 w-full border-b bg-[var(--border)] py-[0.65rem] pb-[0.65rem]`,
        )}
      >
        <Container className="flex w-full justify-between">
          <NavigationMenu className="flex gap-5">
            {/* Navigation Headers */}
            <NavbarHeaders theme={theme} />

            {/* Navigation Menu */}
            <NavbarMenuLinks />
          </NavigationMenu>
          <NavigationMenu className="@5xl:block hidden">
            <NavbarFooter
              theme={theme}
              setTheme={setTheme}
              userSession={userSession}
            />
          </NavigationMenu>
          <NavigationMenu className="@5xl:hidden block">
            <NavbarMobileMenu
              isNavbarOpen={isNavbarOpen}
              setIsNavbarOpen={setIsNavbarOpen}
            />
          </NavigationMenu>
        </Container>
      </section>
      <NavbarMobile
        isNavbarOpen={isNavbarOpen}
        userSession={userSession}
        setIsNavbarOpen={setIsNavbarOpen}
      />
    </>
  );
}

function NavbarHeaders({ theme }: NavbarHeadersParams): React.ReactElement {
  const iconsImageSrc: string =
    theme == "light"
      ? "/img/icons/pixelarium-light.png"
      : "/img/icons/pixelarium-dark.png";

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
    <NavigationMenuList className="@5xl:block hidden">
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
        {!userSession ? (
          <NavigationMenuLink
            className={`${jakartaSans.variable} font-sans font-semibold`}
            href="/login"
          >
            <Button variant="default">
              <AvatarIcon className="mr-2 h-4 w-4" />
              Login / Sign In
            </Button>
          </NavigationMenuLink>
        ) : (
          <NavigationMenuLink
            className={`${jakartaSans.variable} font-sans font-semibold`}
            href="/dashboard"
          >
            <Button variant="outline">
              <HomeIcon className="mr-2 h-4 w-4" /> Dashboard
            </Button>
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

function NavbarMobileMenu({
  isNavbarOpen,
  setIsNavbarOpen,
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
          <HamburgerMenuIcon width={19} height={19} />
        )}
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

export default Navbar;
