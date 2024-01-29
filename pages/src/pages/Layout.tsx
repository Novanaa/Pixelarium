import React from "react";
import type ReactNodeChild from "@/components/interfaces/types/ReactNodeChild";
import Navbar from "@/components/modules/Navbar";

function Layout({ children }: ReactNodeChild) {
  return (
    <>
      <main className="container">
        <Navbar />
        <section>{children}</section>
      </main>
    </>
  );
}

export default Layout;
