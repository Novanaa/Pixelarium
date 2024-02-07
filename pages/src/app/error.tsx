"use client";

import { HeadingOne } from "@/components/ui/Typographies/Heading";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { Button } from "@/components/ui/button";
import { HomeIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import Image from "next/image";
import React from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  const { theme }: UseThemeProps = useTheme();

  const iconsImageSrc: string =
    theme == "light"
      ? "/img/icons/pixelarium-light.png"
      : "/img/icons/pixelarium-dark.png";

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-5 text-center @container">
      <Image width={70} height={70} alt="Pixelarium" src={iconsImageSrc} />
      <HeadingOne>Unexpected Errors Occurred!</HeadingOne>
      <Paragraph className="w-[90%] @5xl:w-[60%]">
        {!error.message
          ? "An unexpected error has occurred, preventing the successful execution of the requested operation. Please try again later or contact our support team for further assistance."
          : error.message}
      </Paragraph>
      <div className="flex gap-3">
        <Button size="lg" className="font-semibold" onClick={() => reset()}>
          <ReloadIcon className="mr-2 h-4 w-4" />
          Try Again!
        </Button>
        <Button variant="secondary" size="lg" className="font-semibold">
          <HomeIcon className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </section>
  );
}

export default Error;
