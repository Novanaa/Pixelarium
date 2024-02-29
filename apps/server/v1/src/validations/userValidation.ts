import { default as joi } from "joi";

/**
 * The function `userValidation` validates a user object against a Joi validation schema.
 * @param  - The `userValidation` function is a generic function that takes an object `payload` as a
 * parameter. The `payload` object is expected to have properties `name`, `picture`, and `bio`, all of
 * which are optional and of type `string`.
 * @returns the result of validating the `payload` object against the `validationSchema`.
 */
export default function userValidation<T>({ payload }: { payload: T }) {
  const validationSchema = joi.object({
    name: joi.string(),
    picture: joi.string(),
    bio: joi.string(),
  });

  return validationSchema.validate(payload);
}
