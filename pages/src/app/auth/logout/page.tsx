import Container from "@/components/ui/Container";
import React from "react";
import LogoIcons from "@/components/ui/LogoIcons";
import { HeadingThree } from "@/components/ui/Typographies/Heading";
import LogoutUserCard from "@/components/modules/auth/logout/UserCard";
import RootLayout from "@/layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you for your time spent here!",
  description: "Pixelarium Logout Pages",
};

export default function Logout(): React.ReactElement {
  return (
    <RootLayout>
      <main className="relative h-[95vh] w-full pt-[10rem] @container">
        <Container className="flex flex-col items-center justify-center gap-4">
          <LogoIcons />
          <HeadingThree className="flex items-center text-center">
            Thank you for your time spent here!
          </HeadingThree>
          <LogoutUserCard />
        </Container>
      </main>
    </RootLayout>
  );
}
