import { Injectable } from "@nestjs/common";
import * as joi from "joi";
import { AddUserPaymentHistoryRequestDTO } from "./providers/add-history/add-history.dto";
import { SubscriptionConstant } from "@/constant/subscription.constant";

@Injectable()
export class PaymentHistoryValidation {
  public static ADD_PAYMENT_HISTORY: joi.ObjectSchema<AddUserPaymentHistoryRequestDTO> =
    joi.object({
      plan: joi
        .string()
        .valid(...SubscriptionConstant.USERPLAN)
        .required(),
      interval_count: joi.number().default(1),
      order_date: joi.date().required(),
      order_id: joi
        .string()
        .required()
        .pattern(SubscriptionConstant.ORDERID_PATTERN),
      status: joi
        .string()
        .valid(...SubscriptionConstant.ORDER_STATUS)
        .default("Pending"),
    });
}
