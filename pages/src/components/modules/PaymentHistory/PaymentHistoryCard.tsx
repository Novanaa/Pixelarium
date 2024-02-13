"use client";

import PaymentHistoryCardProps from "@/components/interfaces/types/PaymentHistoryCard";
import { HeadingFour, HeadingTwo } from "@/components/ui/Typographies/Heading";
import MutedText from "@/components/ui/Typographies/MutedText";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import dynamic from "next/dynamic";

function PaymentHistoryCard({
  Icon,
  content,
  description,
  title,
  tooltipContent,
  subs,
}: PaymentHistoryCardProps): React.ReactElement {
  return (
    <div>
      {!subs ? (
        <Skeleton className="h-[10rem] w-[92vw] rounded-lg sm:w-[81vw] md:w-[21rem]" />
      ) : (
        <div className="flex h-[10rem] w-[92vw] cursor-pointer flex-col gap-1 rounded-lg border p-5 hover:bg-primary-foreground/50 sm:w-[81vw] md:w-[21rem]">
          <div className="flex items-center justify-between">
            <HeadingFour>{title}</HeadingFour>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>{Icon}</TooltipTrigger>
                <TooltipContent className="relative z-10">
                  <Paragraph>{tooltipContent}</Paragraph>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="pt-2">
            <HeadingTwo className="font-extrabold">{content}</HeadingTwo>
            <MutedText>{description}</MutedText>
          </div>
        </div>
      )}
    </div>
  );
}

export function PaymentHistoryCardLoading(): React.ReactElement {
  return (
    <div>
      <Skeleton className="h-[10rem] w-[92vw] rounded-lg sm:w-[81vw] md:w-[21rem]" />
    </div>
  );
}

export default dynamic(() => Promise.resolve(PaymentHistoryCard), {
  ssr: false,
  loading: () => <PaymentHistoryCardLoading />,
});
