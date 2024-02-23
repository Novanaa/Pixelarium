import invalidTypeErrorMessege from "@/constant/readonly/invalidTypeErrorMessege";
import { z } from "zod";

const PictureFieldFormSchema = z.object({
  title: z
    .string({
      required_error: "Please a insert picture title.",
      invalid_type_error: invalidTypeErrorMessege,
    })
    .url({ message: "Link must be an URL!" }),
  expires_in: z.number({
    required_error: "test",
    invalid_type_error: invalidTypeErrorMessege,
  }),
  is_private: z.boolean({
    required_error: "test",
    invalid_type_error: invalidTypeErrorMessege,
  }),
});

export default PictureFieldFormSchema;
