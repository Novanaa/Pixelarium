"use client";

import Container from "@/components/ui/Container";
import { HeadingTwo } from "@/components/ui/Typographies/Heading";
import MutedText from "@/components/ui/Typographies/MutedText";
import React from "react";
import { LineWave } from "react-loader-spinner";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

export default function LoginCallbackLoader(): React.ReactElement {
  const { theme }: UseThemeProps = useTheme();

  const lineWaveColorValidation: string = theme == "light" ? "black" : "white";

  return (
    <Container className="flex h-screen w-full flex-col items-center justify-center gap-3 text-center">
      <div className="relative left-[1.7rem]">
        <LineWave width={160} color={lineWaveColorValidation} height={160} />
      </div>
      <div className="flex flex-col gap-2">
        <HeadingTwo className="text-[1.7rem] font-extrabold sm:text-[1.85rem]">
          Welcome to Pixelarium!
        </HeadingTwo>
        <MutedText>Your request is proccessed...</MutedText>
      </div>
    </Container>
  );
}
