import { default as joi } from "joi";

export default function userValidation<T>({ payload }: { payload: T }) {
  const validationSchema = joi.object({
    name: joi.string(),
    email: joi.string().email(),
    picture: joi.string(),
    bio: joi.string(),
  });

  return validationSchema.validate(payload);
}
