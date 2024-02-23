import React from "react";
import { z } from "zod";

export default interface FormFieldItemProps<T>
  extends React.ComponentProps<"div"> {
  name: string;
  placeholder?: string;
  form: z.infer<T>;
  label?: string;
}
