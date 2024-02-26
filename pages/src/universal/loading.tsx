"use client";

import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import React from "react";
import { LineWave } from "react-loader-spinner";

export default function GlobalLoading(): React.ReactElement {
  const { theme }: UseThemeProps = useTheme();
  const lineWaveColor: string = theme == "light" ? "black" : "white";

  return (
    <main className="fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center bg-black/90">
      <div className="relative left-[1.7rem]">
        <LineWave color={lineWaveColor} width={160} height={160} />
      </div>
    </main>
  );
}
