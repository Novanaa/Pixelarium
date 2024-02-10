import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment History",
  description: "Pixelarium Payment History Page",
};

export default function UserPaymentHistory(): React.ReactElement {
  return (
    <DashboardLayout>
      <div className="pb-[80rem]">hehe</div>
    </DashboardLayout>
  );
}
