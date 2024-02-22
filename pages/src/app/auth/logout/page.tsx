import React from "react";
import LogoIcons from "@/components/molecules/pixelarium-logo-icons";
import { HeadingThree } from "@/components/molecules/typographies/Heading";
import LogoutUserCard from "@/components/modules/auth/logout/UserCard";
import RootLayout from "@/layouts";
import { Metadata } from "next";
import Container from "@/components/molecules/container";

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
