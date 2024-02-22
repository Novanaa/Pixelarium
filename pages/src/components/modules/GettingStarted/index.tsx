"use client";

import Container from "@/components/molecules/Container";
import { HeadingTwo } from "@/components/molecules/Typographies/Heading";
import Paragraph from "@/components/molecules/Typographies/Paragraph";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jakartaSans } from "@/configs/fonts";
import { cn } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";
import { RocketIcon, BookmarkIcon } from "@radix-ui/react-icons";

function GettingStarted(): React.ReactElement {
  const router: AppRouterInstance = useRouter();
  return (
    <section className="mb-[6.2rem] h-full w-full @container">
      <Container className="flex flex-col items-center justify-center gap-4">
        <Badge className="rounded-full text-center font-bold @xl:scale-[1.2]">
          Getting Started
        </Badge>
        <HeadingTwo
          className={cn(
            jakartaSans.variable,
            "pb-0 text-center text-[2rem] font-bold @md:text-[2.5rem]",
          )}
        >
          Ready to Join us?
        </HeadingTwo>
        <Paragraph className="w-[95%] text-center font-medium text-primary/70 @5xl:w-[70%]">
          So, what are you waiting for? Dive into the world of visual and let
          your pictures paint a thousand words.{" "}
          <span className="text-primary/100">
            It&apos;s time to share your passion and make your mark in the world
            of photography.
          </span>
        </Paragraph>
        <div className="flex w-[95%] flex-col gap-4 @md:w-fit @md:flex-row">
          <Button
            className="flex w-full font-semibold"
            onClick={() => router.push("/auth/login")}
          >
            <RocketIcon className="mr-2 h-4 w-4" />
            Shares your creativity
          </Button>
          <Button
            className="flex w-full font-semibold"
            variant="secondary"
            onClick={() => router.push("/tos")}
          >
            <BookmarkIcon className="mr-2 h-4 w-4" />
            Terms of Service
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default GettingStarted;
