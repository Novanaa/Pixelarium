import { plan, subscriptionStatus } from "../../../../generated/client";

type AddUserPaymentHistorySchemaValidation = {
  order_id: string;
  plan: plan;
  interval_count: number;
  amount: {
    USD: number;
    IDR?: number;
  };
  status: subscriptionStatus;
  order_date: string;
};

export default AddUserPaymentHistorySchemaValidation;
