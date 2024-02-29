"use client";

import { HeadingTwo } from "@/components/molecules/typographies/Heading";
import MutedText from "@/components/molecules/typographies/MutedText";
import Paragraph from "@/components/molecules/typographies/Paragraph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function PaymentHistoryHeader(): React.ReactElement {
  return (
    <section className="flex flex-col gap-1">
      <HeadingTwo className="text-4xl font-extrabold">
        Your Payment History
      </HeadingTwo>
      <div className="flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoCircledIcon className="mr-1 h-4 w-4 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <Paragraph>
                This functionality enables individuals to review and track their
                financial activities over a specific period of time.
              </Paragraph>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <MutedText className="font-medium">
          View your Transaction History
        </MutedText>
      </div>
    </section>
  );
}
