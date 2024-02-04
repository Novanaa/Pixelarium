"use client";

import Container from "@/components/ui/Container";
import { HeadingFour, HeadingTwo } from "@/components/ui/Typographies/Heading";
import MutedText from "@/components/ui/Typographies/MutedText";
import { Button } from "@/components/ui/button";
import { jakartaSans } from "@/configs/fonts";
import { cn } from "@/lib/utils";
import { CheckIcon, Cross2Icon, RocketIcon } from "@radix-ui/react-icons";
import React from "react";
import getPricesLists from "@/services/getPricesLists";
import rupiah from "@/utils/rupiah";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { HiSparkles, HiFire } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function Pricing(): React.ReactElement {
  return (
    <section className="relative h-full w-full pb-36 pt-[8rem] @container">
      <Container
        className={cn(
          "flex flex-col items-center justify-center gap-6 font-sans",
          jakartaSans.variable,
        )}
      >
        <PricingHeader />
        <main className="-ml-2 grid grid-cols-1 gap-4 @xs:-ml-0 @2xl:grid-cols-2 @5xl:grid-cols-3 @5xl:gap-10 @7xl:gap-4">
          <PricingList />
        </main>
      </Container>
    </section>
  );
}

function PricingHeader(): React.ReactElement {
  return (
    <HeadingTwo className="text-center text-3xl font-bold @2xl:text-4xl">
      Find the Perfect Fit for Your Needs.
    </HeadingTwo>
  );
}

function PricingList() {
  const router: AppRouterInstance = useRouter();

  const pricesLists = getPricesLists();

  return pricesLists
    .filter((list) => list.title !== "None")
    .map((list) => {
      return (
        <div
          className={`${!list.isPrimary ? `relative @5xl:top-[1.5rem]` : `relative top-0`} flex h-[43.5rem] w-[95vw] flex-col items-center rounded-lg border bg-primary-foreground/10 p-8 @xs:h-[39.5rem] @xs:w-[20rem]`}
          key={list.id}
        >
          <div className="flex items-center justify-center gap-2">
            <HeadingTwo className="text-center">{list.title} Plans</HeadingTwo>
            {list.title == "Diamond" ? (
              <HiSparkles className="h-6 w-6" />
            ) : null}
            {list.title == "Netherite" ? <HiFire className="h-6 w-6" /> : null}
            {list.title == "Gold" ? <RocketIcon className="h-6 w-6" /> : null}
          </div>
          <MutedText className="text-center text-[0.77rem] font-medium">
            {list.description}
          </MutedText>
          <div className="flex flex-col items-center gap-1">
            <HeadingTwo className="relative top-4 text-center">
              $ {list.price} / {list.interval}
            </HeadingTwo>
            <MutedText className="mt-1 text-center">
              ({rupiah(list.priceInIDR)})
            </MutedText>
          </div>
          <Button
            className="relative mt-4 flex w-full font-semibold"
            variant={list.isPrimary ? "default" : "secondary"}
            onClick={() => router.push("/")}
          >
            <RocketIcon className="mr-2 h-4 w-4" />
            Upgrade
          </Button>
          <div className="w-full border-b py-3"></div>
          <div className="mt-3 w-full">
            <HeadingFour>Benefits</HeadingFour>
            <div className="mt-2 flex flex-col gap-[0.6rem] opacity-80">
              {list.benefits.map((benefit, i) => {
                return (
                  <div className="flex items-center" key={i}>
                    {benefit.isIncluded ? (
                      <CheckIcon className="mr-1 h-4 w-4" />
                    ) : (
                      <Cross2Icon className="mr-1 h-4 w-4" />
                    )}
                    {benefit.title}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HiOutlineQuestionMarkCircle className="relative ml-2 flex h-4 w-4 cursor-pointer items-end justify-end" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-primary">
                          <Paragraph className="text-center font-semibold">
                            {benefit.description}
                          </Paragraph>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
}

export default Pricing;
