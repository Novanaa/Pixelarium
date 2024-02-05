"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { HeadingOne } from "@/components/ui/Typographies/Heading";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { jakartaSans } from "@/configs/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import getLogoSource from "@/utils/getLogoSource";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import { RocketIcon } from "@radix-ui/react-icons";
import { HiCash } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Container from "@/components/ui/Container";

function Hero(): React.ReactElement {
  const router: AppRouterInstance = useRouter();
  const { theme }: UseThemeProps = useTheme();

  const pixelariumLogoSrc: string = getLogoSource(theme!);

  const dummyImageSrc: string =
    "https://fastly.picsum.photos/id/551/1150/550.jpg?hmac=TZ-b_30y68kxg-3nHZgKeCvZckpTYvFSDMk8qQBPPZ4";

  return (
    <Container>
      <section className="relative top-[4rem] h-full w-full pb-10 @container">
        <main className="flex flex-col items-center justify-center gap-5 pt-[4rem] @xl:pt-[4.5rem]">
          <Image
            alt="Pixelarium"
            src={pixelariumLogoSrc}
            width={55}
            height={55}
          />
          <Badge className="rounded-full @lg:scale-[1.15]">
            Present your pictures with the world.
          </Badge>
          <HeadingOne className="text-center text-[2.1rem] leading-none @xs:text-[2.4rem] @sm:text-[2.25rem] @md:text-[2.8rem] @lg:text-5xl">
            The Infinite Pixels Experience.
          </HeadingOne>
          <Paragraph
            className={`text-center font-medium text-primary/70 @lg:w-[80%] @4xl:w-[60%] ${jakartaSans.variable} w-[100%]`}
          >
            Immerse yourself in a world where creativity knows no bounds.
            Explore the limitless possibilities of{" "}
            <span className="text-primary/100">
              visual storytelling with The Infinite Pixels Experience.
            </span>
          </Paragraph>
          <div className="flex gap-3">
            <Button
              className="font-semibold"
              onClick={() => router.push("/auth/login")}
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              Start Upload
            </Button>
            <Button
              className="font-semibold"
              size="lg"
              variant="outline"
              onClick={() => router.push("/pricing")}
            >
              <HiCash className="mr-2 h-[1.4rem] w-[1.4rem]" />
              Pricing
            </Button>
          </div>
          <div className="relative">
            <LazyLoadImage
              effect="blur"
              alt="test"
              src={dummyImageSrc}
              className="relative top-2 rounded-lg border object-fill shadow-lg shadow-primary/15 @lg:scale-[0.9] sm:top-0"
            />
          </div>
        </main>
      </section>
    </Container>
  );
}

export default Hero;
