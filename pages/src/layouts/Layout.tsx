import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import React from "react";

/**
 * Renders the root layout of the application.
 *
 * @param {React.ComponentProps<"main">} children - The child components to be rendered within the layout.
 * @returns {React.ReactElement} The rendered root layout.
 */
export default function RootLayout({
  children,
}: React.ComponentProps<"main">): React.ReactElement {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
