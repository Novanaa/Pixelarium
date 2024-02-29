import Subscription from "@/interfaces/types/Subscription";
import React from "react";

export default interface PaymentHistoryCardProps
  extends React.ComponentProps<"div"> {
  title: string;
  tooltipContent: string;
  content: string;
  description: string;
  Icon: React.ReactElement;
  subs: Subscription | undefined;
}
