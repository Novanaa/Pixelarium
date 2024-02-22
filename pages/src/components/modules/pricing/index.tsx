import React from "react";
import PricingHeader from "./Header";
import PricingList from "./List";
import { jakartaSans } from "@/configs/fonts";
import { cn } from "@/lib/utils";
import Container from "@/components/molecules/container";

export default function PricingLists(): React.ReactElement {
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
