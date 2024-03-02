import invalidTypeErrorMessege from "@/constant/readonly/invalid-type-error-messege";
import { z } from "zod";

const updatePictureField = z.object({
  title: z.string({ invalid_type_error: invalidTypeErrorMessege }),
  description: z.string({ invalid_type_error: invalidTypeErrorMessege }),
  is_private: z.string({
    invalid_type_error: invalidTypeErrorMessege,
  }),
  expires_in: z.string({
    invalid_type_error: invalidTypeErrorMessege,
  }),
  link: z
    .string({
      invalid_type_error: invalidTypeErrorMessege,
    })
    .url({ message: "Link must be an URL!" }),
});

export default updatePictureField;
