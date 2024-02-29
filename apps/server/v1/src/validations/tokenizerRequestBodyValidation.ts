import { default as joi } from "joi";
import TokenizerRequestBodyValidation from "./interfaces/types/TokenizerRequestBodyValidation";
import userPlans from "../const/readonly/userPlans";
import { Request } from "express";

/**
 * Validates the request body for the tokenizer function.
 *
 * @param {Request} request - The request object containing the body to be validated.
 * @returns {joi.ValidationResult<TokenizerRequestBodyValidation>} - The validation result.
 */
export default function tokenizerRequestBodyValidation(
  request: Request
): joi.ValidationResult<TokenizerRequestBodyValidation> {
  const validationSchema: joi.ObjectSchema<TokenizerRequestBodyValidation> =
    joi.object({
      data: joi.object({
        items_details: joi.object({
          plan: joi
            .string()
            .valid(userPlans[1], userPlans[2], userPlans[3])
            .required(),
          currency: joi.string().default("USD"),
        }),
        interval_count_in_month: joi.number().default(1),
      }),
    });

  return validationSchema.validate(request.body);
}
