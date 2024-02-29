import { Plan } from "./Subscription";

export default interface PaymentHistory {
  id: number;
  user_id: number;
  order_id: string;
  plan: Plan;
  interval_count: number;
  amount: Amount;
  status: PaymentHistoryStatus;
  order_date: Date | string;
}

export type PaymentHistoryStatus = "failed" | "pending" | "success";

export interface Amount {
  IDR: number;
  USD: number;
}
