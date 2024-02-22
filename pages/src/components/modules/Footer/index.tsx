"use client";

import React from "react";
import Container from "@/components/molecules/Container";
import Image from "next/image";
import getLogoSource from "@/utils/getLogoSource";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import type FooterHeaderProps from "@/components/interfaces/types/FooterHeaderProps";
import { HeadingFour } from "@/components/molecules/Typographies/Heading";
import { cn } from "@/lib/utils";
import { jakartaSans } from "@/configs/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import type FooterLinkProps from "@/components/interfaces/types/FooterLinkProps";
import NavbarLinksMenu from "@/resources/navbarLinksMenu.json";
import githubRepositoryLink from "@/constant/readonly/githubRepositoryLink";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { SiBuymeacoffee, SiFacebook } from "react-icons/si";
import MutedText from "@/components/molecules/Typographies/MutedText";

function Footer(): React.ReactElement {
  const { theme }: UseThemeProps = useTheme();

  return (
    <section className="h-full w-full border-t py-12 @container">
      <Container className="container flex flex-col items-center justify-center gap-6 @xl:flex-row @xl:items-start @xl:justify-between">
        <FooterHeader theme={theme!} />
        <FooterMenuList />
      </Container>
    </section>
  );
}

function FooterHeader({ theme }: FooterHeaderProps): React.ReactElement {
  const pixelariumLogoSrc: string = getLogoSource(theme);

  return (
    <>
      <Link
        className="flex items-center gap-1 rounded border px-[3.2rem] py-3 opacity-80 @sm:px-14 @xl:px-5 hover:bg-primary-foreground/50"
        href="/"
      >
        <Image
          alt="Pixelarium"
          src={pixelariumLogoSrc}
          width={45}
          height={45}
        />
        <div>
          <HeadingFour className={cn(jakartaSans.variable, "text-xl")}>
            Pixelarium
          </HeadingFour>
          <MutedText className="text-[0.75rem]">
            © {new Date().getFullYear()} Pixelarium, Inc.
          </MutedText>
        </div>
      </Link>
    </>
  );
}

function FooterMenuList(): React.ReactElement {
  const supportLink: string = "https://www.buymeacoffee.com/kadeknova";
  const instaLink: string = "https://www.instagram.com/nvaa.jsx";

  return (
    <div className="grid grid-cols-2 gap-8 @xl:gap-12 @5xl:grid-cols-4 ">
      <div className="flex flex-col gap-3">
        <HeadingFour>Resources</HeadingFour>
        <div className="flex flex-col justify-start gap-2">
          {NavbarLinksMenu.map((data) => {
            return (
              <FooterLink href={data.link} key={data.id}>
                <FooterLinkButton>{data.title}</FooterLinkButton>
              </FooterLink>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <HeadingFour>Community</HeadingFour>
        <div className="flex flex-col justify-start gap-2">
          <FooterLink href={githubRepositoryLink}>
            <FooterLinkButton>
              <GitHubLogoIcon className="mr-[0.35rem] h-4 w-4" />
              Github
            </FooterLinkButton>
          </FooterLink>
          <FooterLink href="/">
            <FooterLinkButton>
              <TwitterLogoIcon className="mr-[0.35rem] h-4 w-4" />
              Twitter
            </FooterLinkButton>
          </FooterLink>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <HeadingFour>Contacts</HeadingFour>
        <div className="flex flex-col justify-start gap-2">
          <FooterLink href={instaLink}>
            <FooterLinkButton>
              <InstagramLogoIcon className="mr-[0.35rem] h-4 w-4" />
              Instagram
            </FooterLinkButton>
          </FooterLink>
          <FooterLink href="/">
            <FooterLinkButton>
              <SiFacebook className="mr-[0.35rem] h-4 w-4" />
              Facebook
            </FooterLinkButton>
          </FooterLink>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <HeadingFour>Support</HeadingFour>
        <div className="flex flex-col justify-start gap-2">
          <FooterLink href={supportLink}>
            <FooterLinkButton>
              <SiBuymeacoffee className="mr-[0.35rem] h-4 w-4" />
              Buy me a coffe
            </FooterLinkButton>
          </FooterLink>
          <div className="opacity-35">
            <FooterLink href={githubRepositoryLink}>
              <FooterLinkButton>
                <GitHubLogoIcon className="mr-[0.35rem] h-4 w-4" />
                Contribute
              </FooterLinkButton>
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinkButton({ children }: ReactNodeChild): React.ReactElement {
  return (
    <Button
      variant="link"
      className="h-0 px-0 py-0 opacity-70 hover:opacity-100"
    >
      {children}
    </Button>
  );
}

function FooterLink({ children, href }: FooterLinkProps): React.ReactElement {
  return <Link href={href}>{children}</Link>;
}

export default Footer;
