import { HeadingThree } from "@/components/molecules/typographies/Heading";
import Paragraph from "@/components/molecules/typographies/Paragraph";
import { Button } from "@/components/ui/button";
import {
  CameraIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

export default function EmptyPictures(): React.ReactElement {
  return (
    <section className="flex h-[70dvh] w-full flex-col items-center justify-center gap-2 text-center">
      <LightningBoltIcon className="h-16 w-16" />
      <Balancer className="mt-4 pb-0">
        <HeadingThree>Showcase your imagery to the universe.</HeadingThree>
      </Balancer>
      <Balancer>
        <Paragraph className="text-center font-medium text-primary/70">
          When you unleash your snapshots,
          <span className="text-primary/100">
            they will appear on your profile.
          </span>
        </Paragraph>
      </Balancer>
      <div className="mt-3 flex w-full flex-col gap-3 @md:w-fit @md:flex-row">
        <Link href="/galleries?tabActive=upload">
          <Button variant="default" className="w-full font-medium">
            <RocketIcon className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </Link>
        <Link href="/albums">
          <Button variant="secondary" className="w-full font-medium">
            <CameraIcon className="mr-2 h-4 w-4" />
            Make an album
          </Button>
        </Link>
      </div>
    </section>
  );
}
