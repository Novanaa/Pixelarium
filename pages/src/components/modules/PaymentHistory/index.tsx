"use client";

import { HeadingFour, HeadingTwo } from "@/components/ui/Typographies/Heading";
import MutedText from "@/components/ui/Typographies/MutedText";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { use, useEffect, useState } from "react";
import Paragraph from "@/components/ui/Typographies/Paragraph";
import { FiActivity } from "react-icons/fi";
import { HiCalendar, HiHeart } from "react-icons/hi";
import PaymentHistoryCardProps from "@/components/interfaces/types/PaymentHistoryCard";
import getUserSubscriptionStatus, {
  GetUserSubscriptionStatusReturnType,
} from "@/services/getUserSubscriptionStatus";
import { Skeleton } from "@/components/ui/skeleton";
import capitalize from "capitalize";
import moment from "moment";
import PaymentDate from "@/components/interfaces/types/PaymentDate";

export default function PaymentHistory(): React.ReactElement {
  return (
    <main className="flex h-full w-full flex-col gap-4 pt-[6rem] @container sm:pl-8 sm:pt-12">
      <PaymentHistoryHeader />
      <PaymentHistoryCards />
    </main>
  );
}

function PaymentHistoryHeader(): React.ReactElement {
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

const subscriptionQuery: Promise<GetUserSubscriptionStatusReturnType | null> =
  getUserSubscriptionStatus();
function PaymentHistoryCards(): React.ReactElement {
  const [paymentDate, setPaymentDate] = useState<PaymentDate>({
    endPaymentDate: "-",
    nextPaymentDate: "-",
    startPaymentDate: "-",
  });

  const subscription: GetUserSubscriptionStatusReturnType | null =
    use(subscriptionQuery);

  const subscriptionNextPaymentDate: Date | undefined =
    subscription?.status.next_payments_date;
  const subscriptionStartDate: Date | undefined =
    subscription?.status.start_date;

  const isActivated: string =
    subscription?.status.status == "active" ? "Active" : "Inactive";

  const userPlan: string = subscription?.status.plan as string;

  const userPlanStatus: string = subscription?.status.plan
    ? capitalize(subscription?.status.plan as string)
    : (subscription?.status.plan as string);

  useEffect(() => {
    if (userPlan !== "none") {
      const unixNextPaymentDate: number = new Date(
        subscriptionNextPaymentDate!,
      ).getTime();
      const unixStartPaymentDate: number = new Date(
        subscriptionStartDate!,
      ).getTime();

      const formattedNextPaymentDate: string =
        moment(unixNextPaymentDate).format("LL");
      const formattedStartDate: string =
        moment(unixStartPaymentDate).format("LL");

      setPaymentDate((prev) => ({
        ...prev,
        nextPaymentDate: formattedNextPaymentDate,
        startPaymentDate: formattedStartDate,
      }));
    }

    return () =>
      setPaymentDate({
        endPaymentDate: "-",
        nextPaymentDate: "-",
        startPaymentDate: "-",
      });
  }, [subscriptionNextPaymentDate, userPlan, subscriptionStartDate]);

  const subscriptionStatusDescription: string =
    userPlan !== "none"
      ? `You have been subscribed since ${paymentDate.startPaymentDate}`
      : "You currently doesn't have any active subscriptions associated with your account.";
  const subscriptionNextPaymentDateDescription: string =
    userPlan !== "none"
      ? `Your next payment date is ${paymentDate.nextPaymentDate}`
      : "Subscribe to Pixelarium and see the new world";

  return (
    <section className="relative mt-2 flex flex-wrap items-center justify-center gap-4 @xl:items-center @xl:justify-start">
      <PaymentHistoryCard
        subs={subscription?.status}
        Icon={<FiActivity className="h-[1.1rem] w-[1.1rem]" />}
        title="Subscription Status"
        tooltipContent="Your Subscription Status"
        description={subscriptionStatusDescription}
        content={isActivated}
      />
      <PaymentHistoryCard
        subs={subscription?.status}
        Icon={<HiHeart className="h-[1.2rem] w-[1.2rem]" />}
        title="Your Plan"
        tooltipContent="Your Subscription Plan"
        description={`Your current subscription plan is ${userPlan}`}
        content={userPlanStatus}
      />
      <PaymentHistoryCard
        subs={subscription?.status}
        Icon={<HiCalendar className="h-[1.2rem] w-[1.2rem]" />}
        title="Next Payment Date"
        tooltipContent="Your Next Payment Date"
        description={subscriptionNextPaymentDateDescription}
        content={paymentDate.nextPaymentDate}
      />
    </section>
  );
}

function PaymentHistoryCard({
  Icon,
  content,
  description,
  title,
  tooltipContent,
  subs,
}: PaymentHistoryCardProps): React.ReactElement {
  return (
    <>
      {!subs ? (
        <Skeleton className="h-[10rem] w-[21rem] rounded-lg " />
      ) : (
        <div className="flex h-[10rem] w-[21rem] cursor-pointer flex-col gap-1 rounded-lg border p-5 hover:bg-primary-foreground/50">
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
    </>
  );
}
