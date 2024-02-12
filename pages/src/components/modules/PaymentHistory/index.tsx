"use client";

import React from "react";
import PaymentHistory from "@/interfaces/types/PaymentHistory";
import PaymentHistoryDataTable from "./PaymentHistoryDataTable";
import PaymentHistoryHeader from "./PaymentHistoryHeader";
import PaymentHistoryCards from "./PaymentHistoryCards";

export default function PaymentHistory(): React.ReactElement {
  return (
    <main className="flex h-full w-full flex-col gap-4 pt-[6rem] @container sm:pl-8 sm:pt-12">
      <PaymentHistoryHeader />
      <PaymentHistoryCards />
      <PaymentHistoryDataTable />
    </main>
  );
}
