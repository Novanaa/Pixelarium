import invalidTypeErrorMessege from "@/constant/readonly/invalid-type-error-messege";
import { z } from "zod";

const PictureFieldFormSchema = z.object({
  link: z
    .string({
      required_error: "Please a insert picture link.",
      invalid_type_error: invalidTypeErrorMessege,
    })
    .url({ message: "Link must be an URL!" }),
  expires_in: z.string({
    required_error: "Choose your expires picture",
    invalid_type_error: invalidTypeErrorMessege,
  }),
  is_private: z.string({
    required_error: "Choose your picture status",
    invalid_type_error: invalidTypeErrorMessege,
  }),
});

export default PictureFieldFormSchema;
