"use client";

import Paragraph from "@/components/molecules/typographies/Paragraph";
import { Form } from "@/components/ui/form";
import { TabsContent } from "@/components/ui/tabs";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PictureFieldFormSchema from "@/validations/pictureField";
import FormFieldItem from "@/components/molecules/forms/field-item";
import OnLoadingButton from "@/components/molecules/button/on-loading";
import { RocketIcon } from "@radix-ui/react-icons";
import FormSelectFieldItem from "@/components/molecules/forms/select-field-item";
import FormSelectFieldItemValue from "@/components/molecules/interfaces/types/FormSelectFieldItemValue";

export default function LinkContent(): React.ReactElement {
  return (
    <TabsContent
      value="link"
      className="-mt-10 flex w-full flex-col items-center justify-center gap-3"
    >
      <Paragraph className="text-lg font-medium">
        Paste your picture link
      </Paragraph>
      <Forms />
    </TabsContent>
  );
}

function Forms(): React.ReactElement {
  const form = useForm<z.infer<typeof PictureFieldFormSchema>>({
    resolver: zodResolver(PictureFieldFormSchema),
    defaultValues: {
      expires_in: 30,
    },
  });

  function onSubmit(data: z.infer<typeof PictureFieldFormSchema>) {
    console.log(data);
  }

  const linkContentSelectExpiresValue: Array<FormSelectFieldItemValue> = [
    { title: "30 Days", value: 30 },
    { title: "90 Days", value: 90 },
    { title: "120 Days", value: 120 },
    { title: "Infinity", value: null },
  ];

  const linkContentSelectStatusValue: Array<FormSelectFieldItemValue> = [
    {
      title: "Public",
      value: false,
    },
    {
      title: "Private",
      value: true,
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-[85%] flex-col gap-3"
      >
        <FormFieldItem
          name="link"
          form={form}
          label="Picture link"
          placeholder="Your picture link"
        />
        <FormSelectFieldItem
          name="expires_in"
          form={form}
          label="Picture expires"
          placeholder="Your picture expires time"
          selectValue={linkContentSelectExpiresValue}
        />
        <FormSelectFieldItem
          name="is_private"
          form={form}
          label="Picture status"
          placeholder="Your picture status"
          selectValue={linkContentSelectStatusValue}
        />
        <OnLoadingButton onLoading={false} type="submit" className="mt-2">
          <RocketIcon className="mr-2 h-4 w-4" />
          Submit
        </OnLoadingButton>
      </form>
    </Form>
  );
}
