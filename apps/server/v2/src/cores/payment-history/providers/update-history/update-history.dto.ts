import { WebResponse } from "@/model/app.model";
import { OrderStatus, PaymentsHistory, User } from "@prisma/client";

export class UpdatePaymentHistoryResponseDTO extends WebResponse {
  updated_field: Record<string, string>;
  updated_history: PaymentsHistory;
  owner: User;
}

export class UpdatePaymentHistoryRequestDTO {
  order_status: OrderStatus;
}
