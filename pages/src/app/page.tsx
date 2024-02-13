import React from "react";
import Hero from "@/components/modules/Hero";
import Features from "@/components/modules/Features";
import GettingStarted from "@/components/modules/GettingStarted";
import RootLayout from "@/layouts/Layout";

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
