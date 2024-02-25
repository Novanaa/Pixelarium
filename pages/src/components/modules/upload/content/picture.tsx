"use client";

import Paragraph from "@/components/molecules/typographies/Paragraph";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { CrossCircledIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import handleUploadPicture from "../services/handleUploadPicture";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import allowedPictureType from "../constant/readonly/allowedPictureType";
import onErrorHandler from "@/utils/onErrorHandler";
import handleCancelRequest from "../services/handleCancelRequest";

export default function PictureContent(): React.ReactElement {
  const [imageBlobSrc, setImageBlobSrc] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState({
    started: false,
    progress: 0,
  });

  return uploadProgress.started ? (
    <OnUploadPictureContent imageSrc={imageBlobSrc} />
  ) : (
    <UploadPictureContent
      progressEventSetter={setUploadProgress}
      imageSrcBlobSetter={setImageBlobSrc}
    />
  );
}

interface UploadPictureContentProps {
  progressEventSetter: React.Dispatch<
    React.SetStateAction<{
      started: boolean;
      progress: number;
    }>
  >;
  imageSrcBlobSetter: React.Dispatch<React.SetStateAction<string>>;
}

function UploadPictureContent({
  progressEventSetter,
  imageSrcBlobSetter,
}: UploadPictureContentProps): React.ReactElement {
  const router: AppRouterInstance = useRouter();
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
      className="mt-32 flex w-full flex-col items-center justify-center gap-3 @container @md:mt-16"
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
      <form className="flex items-center justify-center gap-2">
        <div>
          <Button
            size="default"
            className="font-medium"
            type="button"
            onClick={() => document.getElementById("input-file")?.click()}
          >
            <PaperPlaneIcon className="mr-2 h-4 w-4" />
            {!isMobile ? "Select from computer" : "Browse pictures"}
          </Button>
          <input
            type="file"
            accept={allowedPictureType}
            className="hidden"
            id="input-file"
            onChange={(ev) =>
              handleUploadPicture({
                ev,
                pathname,
                router,
                progressEventSetter,
                imageSrcBlobSetter,
              })
            }
          />
        </div>
        {isMobile && (
          <Link href={pathname} className="font-medium">
            <Button size="default" variant="secondary">
              Cancel
            </Button>
          </Link>
        )}
      </form>
    </TabsContent>
  );
}

interface OnUploadPictureContentProps {
  imageSrc: string;
}

function OnUploadPictureContent({
  imageSrc,
}: OnUploadPictureContentProps): React.ReactElement {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();

  return (
    <TabsContent
      value="picture"
      className="mt-5 flex w-full flex-col items-center justify-center gap-3"
    >
      <LazyLoadImage
        alt="picture"
        effect="black-and-white"
        src={imageSrc}
        className="h-full w-full animate-pulse rounded-lg border border-2 object-cover object-center grayscale"
        width={350}
        height={310}
        onError={({ target }: React.SyntheticEvent<HTMLImageElement, Event>) =>
          onErrorHandler(target)
        }
      />
      <Button
        className="w-[90%] font-medium"
        onClick={() => handleCancelRequest({ pathname, router })}
      >
        <CrossCircledIcon className="mr-2 h-4 w-4" />
        Cancel
      </Button>
    </TabsContent>
  );
}
