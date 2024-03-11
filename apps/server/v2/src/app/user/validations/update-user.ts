import { default as joi } from "joi";
import UpdateUserPayload from "../interfaces/update-user-payload";

/**
 * The function `updateUserPayload` validates the `UpdateUserPayload` object using Joi schema
 * validation in TypeScript.
 * @param {UpdateUserPayload} body - The `body` parameter in the `updateUserPayload` function
 * represents the payload data that is used to update a user's information. This payload should adhere
 * to the `UpdateUserPayload` interface, which likely includes properties such as `bio` and `name`. The
 * function uses Joi validation to ensure
 * @returns The `updateUserPayload` function is returning a `joi.ValidationResult<UpdateUserPayload>`.
 * This result will contain the validation outcome of the `body` parameter against the defined schema
 * in the function.
 */
export default function updateUserPayload(body: UpdateUserPayload) {
  return joi
    .object<UpdateUserPayload>({
      bio: joi.string(),
      name: joi.string(),
      email: joi.string().email(),
      avatar: joi.any(),
    })
    .validate(body);
}
