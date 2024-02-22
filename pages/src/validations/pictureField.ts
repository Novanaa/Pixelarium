import invalidTypeErrorMessege from "@/constant/readonly/invalidTypeErrorMessege";
import { z } from "zod";

const PictureFieldFormSchema = z.object({
  title: z.string({
    required_error: "Please a insert picture title.",
    invalid_type_error: invalidTypeErrorMessege,
  }),
  desctiption: z.string({
    required_error: "Please a insert picture description.",
    invalid_type_error: invalidTypeErrorMessege,
  }),
  expires_in: z.number().default(30),
  link: z.string({
    required_error: "Please a insert picture link.",
    invalid_type_error: invalidTypeErrorMessege,
  }),
  status: z.enum(["public", "private"]).default("public"),
});

export default PictureFieldFormSchema;
