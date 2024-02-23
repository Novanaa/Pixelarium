"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import FormFieldItemProps from "../interfaces/types/FormFieldItemProps";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormSelectFieldItemValue from "../interfaces/types/FormSelectFieldItemValue";

interface FormSelectFieldItemProps<T> extends FormFieldItemProps<T> {
  selectValue: Array<FormSelectFieldItemValue>;
  description?: string;
}

export default function FormSelectFieldItem<T>({
  form,
  name,
  placeholder,
  label,
  selectValue,
}: FormSelectFieldItemProps<T>): React.ReactElement {
  return (
    <FormField
      // @ts-expect-error error types
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>{label}</FormLabel>
            <FormMessage className="text-[0.8rem]" />
          </div>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            name={field.name}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectValue.map((val, i) => (
                <SelectItem value={String(val.value)} key={i}>
                  {val.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
