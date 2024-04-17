import { Injectable } from "@nestjs/common";
import * as joi from "joi";
import { AddUserPaymentHistoryRequestDTO } from "./providers/add-history/add-history.dto";
import { SubscriptionConstant } from "@/constant/subscription.constant";

@Injectable()
export class PaymentHistoryValidation {
  public static ADD_PAYMENT_HISTORY: joi.ObjectSchema<AddUserPaymentHistoryRequestDTO> =
    joi.object({
      plan: joi.string().valid(SubscriptionConstant.USERPLAN),
      interval_count: joi.number(),
      order_date: joi.date(),
      order_id: joi.string(),
      status: joi.string().valid(SubscriptionConstant.ORDER_STATUS),
      amount: joi.object({
        USD: joi.number(),
        IDR: joi.number(),
      }),
    });
}
