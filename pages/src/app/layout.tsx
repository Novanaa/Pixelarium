import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/modules/Navbar";
import { jakartaSans } from "@/configs/fonts";
import { ThemeProvider } from "@/lib/ThemesProvider";
import ReduxProvider from "@/stores/Provider";
import Footer from "@/components/modules/Footer";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Pixelarium",
  description: "The Infinite Pixels Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname: string | null = headers().get("x-pathname");
  const footerComponentValidation: boolean | undefined =
    pathname?.startsWith("/developers");
  const navbarComponentValidation: boolean | undefined =
    pathname?.startsWith("/profile") ||
    pathname?.startsWith("/accounts/settings") ||
    pathname?.startsWith("/accounts/payment/history");

  return (
    <html
      lang="en"
      className="scroll-pt-20 scroll-smooth selection:bg-primary selection:text-secondary"
    >
      <body className={jakartaSans.variable}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {!navbarComponentValidation ? <Navbar /> : null}
            <main>{children}</main>
            {!footerComponentValidation ? <Footer /> : null}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
