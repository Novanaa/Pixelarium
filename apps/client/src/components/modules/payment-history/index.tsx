import React from "react";
import PaymentHistory from "@/interfaces/types/PaymentHistory";
import PaymentHistoryHeader from "./PaymentHistoryHeader";
import PaymentHistoryCards from "./PaymentHistoryCards";
import PaymentHistoryDataTable from "./PaymentHistoryDataTable";

export default function PaymentHistory(): React.ReactElement {
  return (
    <main className="flex h-full w-full flex-col gap-4 pb-24 pt-[6rem] @container sm:pl-8 sm:pt-12">
      <PaymentHistoryHeader />
      <PaymentHistoryCards />
      <PaymentHistoryDataTable />
    </main>
  );
}
