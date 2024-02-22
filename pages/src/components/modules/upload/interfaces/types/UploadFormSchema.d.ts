import { z } from "zod";

export default interface UploadFormSchema {
  title: z.ZodString;
  desctiption: z.ZodString;
  link: z.ZodString;
  expires_in: z.ZodNumber;
  status: "public" | "private";
}
