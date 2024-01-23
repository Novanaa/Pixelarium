import { default as joi } from "joi";
import { UpdateUserPaymentHistoryRequestBodyValidationSchema } from "./interfaces/types/UpdateUserPaymentHistoryRequestBodyValidationSchema";
import { Request } from "express";

export default function updateUserPaymentHistoryRequestBodyValidation(
  request: Request
): joi.ValidationResult<UpdateUserPaymentHistoryRequestBodyValidationSchema> {
  const schemaValidation: joi.ObjectSchema<UpdateUserPaymentHistoryRequestBodyValidationSchema> =
    joi.object({
      status: joi.string().required().valid("failed", "success", "pending"),
    });

  return schemaValidation.validate(request.body);
}
