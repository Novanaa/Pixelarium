import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import { Metadata } from "next";
import PaymentHistory from "@/components/modules/PaymentHistory";

export const metadata: Metadata = {
  title: "Payment History",
  description: "Pixelarium Payment History Page",
};

export default function UserPaymentHistory(): React.ReactElement {
  return (
    <DashboardLayout>
      <PaymentHistory />
    </DashboardLayout>
  );
}
