import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/modules/Navbar";
import { jakartaSans } from "@/configs/fonts";
import { ThemeProvider } from "@/lib/ThemesProvider";
import ReduxProvider from "@/stores/Provider";

export const metadata: Metadata = {
  title: "Pixelarium",
  description: "The Infinite Pixels Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSans.variable}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="container">{children}</main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
