import React from "react";
import { UseFormReturn } from "react-hook-form";

export default interface FormFieldItemProps<T>
  extends React.ComponentProps<"div"> {
  name: string;
  placeholder?: string;
  form: UseFormReturn<T>;
  label?: string;
}
