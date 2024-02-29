import React from "react";
import RootLayout from "@/layouts";
import PricingLists from "@/components/modules/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find the Perfect Fit for Your Needs.",
  description: "Pixelarium Pricing Pages",
};

export default function Pricing(): React.ReactElement {
  return (
    <RootLayout>
      <PricingLists />
    </RootLayout>
  );
}
