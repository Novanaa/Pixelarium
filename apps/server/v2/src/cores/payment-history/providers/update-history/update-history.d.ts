import { UpdatePaymentHistoryRequestDTO } from "./update-history.dto";

export interface UpdatePaymentHistoryParam {
  name: string;
  orderId: string;
  body: UpdatePaymentHistoryRequestDTO;
}
