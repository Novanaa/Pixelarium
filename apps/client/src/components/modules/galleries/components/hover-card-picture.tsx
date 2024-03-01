"use client";

import Paragraph from "@/components/molecules/typographies/paragraph";
import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import moment from "moment";
import Picture from "@/components/interfaces/types/Picture";

interface HoverCardPictureProps extends React.ComponentProps<"div"> {
  picture: Picture;
}

export default function HoverCardPicture({
  children,
  picture,
}: HoverCardPictureProps): React.ReactElement {
  const [pictureExpires, setPictureExpires] = useState<string>("Forever");
  const createdAt: number = new Date(new Date(picture.createdAt)).getTime();
  const formattedCreatedAtDate: string = moment(createdAt).format("LLL");
  const expiresIn: number | null | undefined = picture.expires_in;

  useEffect(() => {
    if (expiresIn) {
      const pictureCreatedDate: Date = new Date(picture.createdAt);
      const pictureExpiresIn: number = pictureCreatedDate.setDate(
        pictureCreatedDate.getDate() + expiresIn,
      );
      const formattedDate: string = moment(pictureExpiresIn).format("LLL");

      setPictureExpires(formattedDate);
    }

    return () => setPictureExpires("Forever");
  }, [expiresIn, picture.createdAt]);

  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className="relative z-50 flex h-full justify-start gap-2 bg-background">
        <div className="flex w-56 flex-col gap-1">
          <Paragraph className="overflow-hidden text-ellipsis text-wrap text-base font-medium">
            {picture.title} - ({picture.filename})
          </Paragraph>
          <Paragraph className="overflow-hidden text-ellipsis text-sm font-medium text-primary/50">
            {picture.description && "This picture doesn't have a description"}
          </Paragraph>
          <Paragraph className="text-sm font-medium text-primary/50">
            ({picture.is_private ? "Private" : "Public"}){" "}
            {formattedCreatedAtDate} - {pictureExpires}
          </Paragraph>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
