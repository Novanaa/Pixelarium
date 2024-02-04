import React from "react";
import { HeadingTwo } from "@/components/ui/Typographies/Heading";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import cn from "@/utils/cn";
import { jakartaSans } from "@/configs/fonts";
import {
  LockClosedIcon,
  CameraIcon,
  MixerVerticalIcon,
  UploadIcon,
  CommitIcon,
  Share1Icon,
} from "@radix-ui/react-icons";

function Features(): React.ReactElement {
  return (
    <section className="light:bg-primary-foreground/100 relative my-[6.2rem] h-full w-full border-b border-t pb-10 @container @3xl:top-[4.5rem] dark:bg-primary-foreground/20">
      <main className="flex flex-col items-center justify-center gap-[0.2rem] pt-[4rem]">
        <FeaturesHeader />
        <FeaturesCard />
      </main>
    </section>
  );
}

function FeaturesHeader(): React.ReactElement {
  return (
    <>
      <HeadingTwo
        className={cn(
          "text-center text-2xl font-bold @xs:w-[90%] @md:w-[80%] @md:text-3xl lg:text-3xl",
          jakartaSans.variable,
        )}
      >
        Compose with everything you need.
      </HeadingTwo>
      <Paragraph className="w-[95%] text-center font-medium text-primary/70 @xs:w-[85%] @lg:w-[80%] @3xl:w-[65%] @5xl:w-[40%]">
        Immerse yourself in a world of{" "}
        <span className="text-primary/100">limitless possibilities</span> as you
        harness the power of our comprehensive tools.
      </Paragraph>
    </>
  );
}

function FeaturesCard(): React.ReactElement {
  return (
    <div className="relative mt-5 grid grid-cols-1 place-items-center gap-5 p-0 @2xl:grid-cols-2 @5xl:grid-cols-3">
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-6 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <LockClosedIcon width={28} height={28} />
        <Paragraph className="text-lg font-medium">
          Secure and Private
        </Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Your images are hosted securely with encryption and access controls.
        </Paragraph>
      </div>
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-5 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <MixerVerticalIcon width={28} height={28} />
        <Paragraph className="text-lg font-medium">
          Flexible Sharing Options
        </Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Share images with unique URLs, making it easy to embed images on
          websites or share on social media.
        </Paragraph>
      </div>
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-6 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <CameraIcon width={28} height={28} />
        <Paragraph className="text-lg font-medium">Image Management</Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Organize and manage your uploaded images effortlessly with intuitive
          tools.
        </Paragraph>
      </div>
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-6 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <UploadIcon width={28} height={28} />
        <Paragraph className="text-lg font-medium">Easy Image Upload</Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Quickly upload images to the platform with a straightforward
          interface.
        </Paragraph>
      </div>
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-6 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <CommitIcon width={28} height={28} />
        <Paragraph className="text-lg font-medium">Customizable</Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Customize your image uploads with tags, descriptions, and other
          metadata.
        </Paragraph>
      </div>
      <div className="flex h-[10.3rem] w-[90%] flex-col justify-start gap-[0.3rem] rounded-md border pl-5 pr-6 pt-6 hover:cursor-default hover:bg-primary-foreground/50 @xs:w-[85%] @sm:w-[80vw] @2xl:w-[20rem] @5xl:w-[20rem]">
        <Share1Icon width={28} height={28} />
        <Paragraph className="text-lg font-medium">Easy Sharing</Paragraph>
        <Paragraph className="text-sm text-primary/70">
          Share your images with ease using the provided shareable links.
        </Paragraph>
      </div>
    </div>
  );
}

export default Features;
