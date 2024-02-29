import React from "react";
import Hero from "@/components/modules/hero";
import Features from "@/components/modules/features";
import GettingStarted from "@/components/modules/getting-started";
import RootLayout from "@/layouts";

function Home() {
  return (
    <RootLayout>
      <Hero />
      <Features />
      <GettingStarted />
    </RootLayout>
  );
}

export default Home;
