import { NextFontConfiguration } from "@/interfaces/types/NextFontConfiguration";
import { NextFont } from "next/dist/compiled/@next/font";
import { Plus_Jakarta_Sans } from "next/font/google";

const nextFontConfiguration: NextFontConfiguration = {
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
};

export const jakartaSans: NextFont = Plus_Jakarta_Sans(nextFontConfiguration);

export const jakartaSansMedium: NextFont = Plus_Jakarta_Sans({
  ...nextFontConfiguration,
  weight: "500",
});

export const jakartaSansSemiBold: NextFont = Plus_Jakarta_Sans({
  ...nextFontConfiguration,
  weight: "600",
});

export const jakartaSansBold: NextFont = Plus_Jakarta_Sans({
  ...nextFontConfiguration,
  weight: "700",
});

export const jakartaSansExtraBold: NextFont = Plus_Jakarta_Sans({
  ...nextFontConfiguration,
  weight: "800",
});
