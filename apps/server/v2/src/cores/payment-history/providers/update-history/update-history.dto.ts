import { WebResponse } from "@/model/app.model";
import { OrderStatus } from "@prisma/client";

export class UpdatePaymentHistoryResponseDTO extends WebResponse {}

export class UpdatePaymentHistoryRequestDTO {
  order_status: OrderStatus;
}
