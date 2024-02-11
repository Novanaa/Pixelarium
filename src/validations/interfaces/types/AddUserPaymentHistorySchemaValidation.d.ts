import { plan, subscriptionStatus } from "../../../../generated/client";
import AmountPrices from "../../../apps/v1/payments-histories/interfaces/types/AmountPrices";

type AddUserPaymentHistorySchemaValidation = {
  order_id: string;
  plan: plan;
  interval_count: number;
  amount: AmountPrices;
  status: subscriptionStatus;
  order_date: string | Date;
};

export default AddUserPaymentHistorySchemaValidation;
