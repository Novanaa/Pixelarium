import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Plus_Jakarta_Sans } from "next/font/google";

export const jakartaSans: NextFontWithVariable = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: "400",
  style: ["normal"],
});
