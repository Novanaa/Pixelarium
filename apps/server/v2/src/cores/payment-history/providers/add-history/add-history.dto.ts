import { WebResponse } from "@/model/app.model";
import { PaymentsHistory, User } from "@prisma/client";

export class AddUserPaymentHistoryResponseDTO extends WebResponse {
  owner: User;
  history: PaymentsHistory;
}
