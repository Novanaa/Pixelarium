import { Prisma } from "@prisma/client";
import { AddUserPaymentHistoryRequestDTO } from "./add-history.dto";

export interface OrderAmount {
  IDR: number;
  USD: number;
}

export interface createPaymentHistoryParam {
  userId: string;
  amount: OrderAmount | Prisma.InputJsonValue;
  payload: AddUserPaymentHistoryRequestDTO;
}
