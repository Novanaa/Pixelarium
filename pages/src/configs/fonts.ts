import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";

export const jakartaSans: NextFontWithVariable = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
});

export const firaCode: NextFontWithVariable = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});
