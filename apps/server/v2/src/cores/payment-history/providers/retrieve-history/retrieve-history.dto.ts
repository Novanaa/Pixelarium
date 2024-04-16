import { WebResponse } from "@/model/app.model";
import { PaymentsHistory, User } from "@prisma/client";

export class RetrieveUserPaymentHistoryResponseDTO extends WebResponse {
  owner: User;
  histories: Array<PaymentsHistory>;
}
