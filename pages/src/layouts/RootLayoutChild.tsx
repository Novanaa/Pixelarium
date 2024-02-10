"use client";

import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

export default function RootLayoutChild({
  children,
}: React.ComponentProps<"div">): React.ReactElement {
  const windowWidth: number = useWindowWidth();
  const pathname: string = usePathname();
  const footerComponentValidation: boolean | undefined =
    pathname?.startsWith("/developers") ||
    (pathname?.startsWith("/accounts/payment/history") && windowWidth < 640);
  const navbarComponentValidation: boolean | undefined =
    pathname?.startsWith("/profile") ||
    pathname?.startsWith("/accounts/settings") ||
    pathname?.startsWith("/accounts/payment/history");

  return (
    <>
      <div className={!navbarComponentValidation ? "block" : "block sm:hidden"}>
        <Navbar />
      </div>
      <main>{children}</main>
      <div></div>
      <div className={!footerComponentValidation ? "block" : "hidden"}>
        <Footer />
      </div>
    </>
  );
}
