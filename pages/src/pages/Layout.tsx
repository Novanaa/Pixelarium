import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import Navbar from "@/components/modules/Navbar";
import { cn } from "@/lib/utils";

interface LayoutParams extends ReactNodeChild {
  className?: string;
}

function Layout({ children, className }: LayoutParams) {
  console.log(className);
  return (
    <>
      <main className={cn(`container`, className)}>
        <Navbar />
        <section>{children}</section>
      </main>
    </>
  );
}

export default Layout;
