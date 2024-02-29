"use client";

import React, { use, useEffect, useState } from "react";
import { FiActivity } from "react-icons/fi";
import { HiCalendar, HiHeart } from "react-icons/hi";
import getUserSubscriptionStatus, {
  GetUserSubscriptionStatusReturnType,
} from "@/services/getUserSubscriptionStatus";
import capitalize from "capitalize";
import moment from "moment";
import PaymentDate from "@/components/interfaces/types/PaymentDate";
import PaymentHistoryCard from "./PaymentHistoryCard";

const subscriptionQuery: Promise<GetUserSubscriptionStatusReturnType | null> =
  getUserSubscriptionStatus();
export default function PaymentHistoryCards(): React.ReactElement {
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
    <section className="relative mt-2 flex w-full flex-wrap items-center justify-center gap-4 sm:items-start sm:justify-start">
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
