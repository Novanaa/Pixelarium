import { default as NavbarMobileMenuParams } from "@/components/interfaces/types/NavbarMobileMenu";
import Container from "@/components/ui/Container";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import navbarLinksMenu from "@/resources/navbarLinksMenu.json";
import { Button } from "@/components/ui/button";
import { jakartaSans } from "@/configs/fonts";
import {
  AvatarIcon,
  GitHubLogoIcon,
  MoonIcon,
  ReloadIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import githubRepositoryLink from "@/constant/readonly/githubRepositoryLink";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

interface NavbarMobileParams extends NavbarMobileMenuParams {
  userSession: boolean | null;
  throttleUser: boolean;
}

function NavbarMobile({
  isNavbarOpen,
  userSession,
  throttleUser,
}: NavbarMobileParams): React.ReactElement {
  const { theme, setTheme }: UseThemeProps = useTheme();

  const isNavbarOpenValidation: string = !isNavbarOpen ? "hidden" : "block";

  return (
    <section
      className={`${isNavbarOpenValidation} fixed z-10 flex h-screen w-full justify-center bg-secondary/90`}
    >
      <Container className="relative top-20 w-full">
        <NavigationMenu className="flex flex-col gap-5">
          <NavbarMobileMenuLinks />
        </NavigationMenu>
        <div className="relative top-6 flex gap-2">
          {!userSession ? (
            <Link
              className={`${jakartaSans.variable} flex w-full font-sans font-semibold`}
              href="/auth/login"
            >
              <Button
                variant="default"
                size="lg"
                className="flex w-full"
                disabled={throttleUser}
              >
                {throttleUser ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  <>
                    <AvatarIcon className="mr-2 h-4 w-4" />
                    Login / Sign In
                  </>
                )}
              </Button>
            </Link>
          ) : (
            <Link
              className={`${jakartaSans.variable} flex w-full font-sans font-semibold`}
              href="/dashboard"
            >
              <Button
                variant="outline"
                size="default"
                className="flex w-full"
                disabled={throttleUser}
              >
                {throttleUser ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  <>
                    <AvatarIcon className="mr-2 h-4 w-4" /> Profile
                  </>
                )}
              </Button>
            </Link>
          )}
          <Link href={githubRepositoryLink}>
            <Button variant="default" size="default">
              <GitHubLogoIcon />
            </Button>
          </Link>
          <div>
            {theme == "light" ? (
              <Button>
                <MoonIcon onClick={() => setTheme("dark")} />
              </Button>
            ) : (
              <Button>
                <SunIcon onClick={() => setTheme("light")} />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function NavbarMobileMenuLinks(): React.ReactElement {
  return (
    <NavigationMenuList className="w-full">
      <NavigationMenuItem className="flex w-full cursor-pointer flex-col gap-5 text-[1.05rem] opacity-85 hover:opacity-100">
        <NavigationMenuLink
          href={navbarLinksMenu[0].link}
          className="flex font-sans text-[0.9rem] font-medium decoration-8 underline-offset-8 hover:font-semibold sm:text-[1rem]"
        >
          {navbarLinksMenu[0].title}
        </NavigationMenuLink>
        <NavigationMenuLink
          href={navbarLinksMenu[1].link}
          className="flex font-sans text-[0.9rem] font-medium decoration-8
        underline-offset-8 hover:font-semibold sm:text-[1rem]"
        >
          {navbarLinksMenu[1].title}
        </NavigationMenuLink>
        <NavigationMenuLink
          href={navbarLinksMenu[2].link}
          className="flex font-sans text-[0.9rem] font-medium decoration-8
        underline-offset-8 hover:font-semibold sm:text-[1rem]"
        >
          {navbarLinksMenu[2].title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

export default NavbarMobile;
