import { UserPaymentHistory } from "@/model/app";
import { OrderAmount } from "./add-history";
import { WebResponse } from "@/model/app.model";
import { User, UserPlan, OrderStatus } from "@prisma/client";

export class AddUserPaymentHistoryResponseDTO extends WebResponse {
  owner: User;
  history: UserPaymentHistory;
}

export class AddUserPaymentHistoryRequestDTO {
  order_id: string;
  plan: UserPlan;
  interval_count: number;
  status: OrderStatus;
  order_date: Date;
  amount: OrderAmount;
}
