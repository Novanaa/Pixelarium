import { default as joi } from "joi";
import AddUserPaymentHistorySchemaValidation from "./interfaces/types/AddUserPaymentHistorySchemaValidation";
import { Request } from "express";
import orderIdPattern from "../const/readonly/orderIdPattern";

export default function addUserPaymentHistoryRequestBodyValidation(
  request: Request
): joi.ValidationResult<AddUserPaymentHistorySchemaValidation> {
  const schemaValidation: joi.ObjectSchema<AddUserPaymentHistorySchemaValidation> =
    joi.object({
      order_id: joi.string().required().regex(orderIdPattern),
      interval_count: joi.number().required(),
      plan: joi.string().valid("Gold", "Diamond", "Netherite").required(),
      status: joi.string().valid("failed", "success", "pending").required(),
      order_date: joi.date().required(),
      amount: joi
        .object({
          USD: joi.number().required(),
          IDR: joi.number(),
        })
        .required(),
    });

  return schemaValidation.validate(request.body);
}
