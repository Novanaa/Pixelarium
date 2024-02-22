"use client";

import Paragraph from "@/components/ui/Typographies/Paragraph";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PictureContent(): React.ReactElement {
  const pathname: string = usePathname();
  const windowWitdh: number = useWindowWidth();
  const { theme }: UseThemeProps = useTheme();
  const isMobile: boolean = windowWitdh < 448;
  const pictureImageSource: string =
    theme == "light"
      ? "/img/illustrations/light/paper-airplane.png"
      : "/img/illustrations/dark/paper-airplane.png";

  return (
    <TabsContent
      value="picture"
      className="mt-28 flex w-full flex-col items-center justify-center gap-3 @container @md:mt-16"
    >
      <LazyLoadImage
        src={pictureImageSource}
        width={90}
        height={90}
        alt="picture"
        effect="black-and-white"
      />
      <Paragraph className="mt-5 text-lg font-medium">
        Drag your photos here
      </Paragraph>
      <div className="flex items-center justify-center gap-2">
        <Button size="default">
          <PaperPlaneIcon className="mr-2 h-4 w-4" />
          {!isMobile ? "Select from computer" : "Browse pictures"}
        </Button>
        {isMobile && (
          <Link href={pathname}>
            <Button size="default" variant="secondary">
              Cancel
            </Button>
          </Link>
        )}
      </div>
    </TabsContent>
  );
}
