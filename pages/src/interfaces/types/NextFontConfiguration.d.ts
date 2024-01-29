import { Display } from "next/dist/compiled/@next/font";

type NextFontConfiguration = {
  weight?:
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "variable"
    | Array<"200" | "300" | "400" | "500" | "600" | "700" | "800">;
  style?: "normal" | "italic" | Array<"normal" | "italic">;
  display?: Display;
  preload?: boolean;
  fallback?: string[];
  adjustFontFallback?: boolean;
  subsets?: Array<"cyrillic-ext" | "latin" | "latin-ext" | "vietnamese">;
};
