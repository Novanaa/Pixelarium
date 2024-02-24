"use client";

import React from "react";
import { z } from "zod";
import Paragraph from "@/components/molecules/typographies/Paragraph";
import { TabsContent } from "@/components/ui/tabs";
import OnLoadingButton from "@/components/molecules/button/on-loading";
import { CrossCircledIcon, RocketIcon } from "@radix-ui/react-icons";
import linkContentSelectExpiresValue from "../constant/readonly/linkContentSelectExpiresValue";
import linkContentSelectStatusValue from "../constant/readonly/linkContentSelectStatusValue";
import useUploadForm from "../hooks/useUploadForm";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import FormFieldItem from "@/components/molecules/forms/field-item";
import onSubmitForm from "../services/onSubmitForm";
import FormSelectFieldItem from "@/components/molecules/forms/select-field-item";
import PictureFieldFormSchema from "@/validations/pictureField";

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
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const form = useUploadForm();
  const isLoadingForm: boolean = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          (data: z.infer<typeof PictureFieldFormSchema>) =>
            onSubmitForm({ data, form }),
        )}
        className="flex w-[85%] flex-col gap-3"
      >
        <FormFieldItem
          name="link"
          form={form}
          placeholder="Your picture link"
          label="Picture Link"
          isLoading={isLoadingForm}
        />
        <FormSelectFieldItem
          form={form}
          name="expires_in"
          placeholder="Your pictures expires time"
          label="Picture expires"
          selectValue={linkContentSelectExpiresValue}
          isLoading={isLoadingForm}
        />
        <FormSelectFieldItem
          form={form}
          name="is_private"
          placeholder="Your pictures status"
          label="Picture status"
          selectValue={linkContentSelectStatusValue}
          isLoading={isLoadingForm}
        />
        <div className="mt-2 flex flex-col gap-3">
          <OnLoadingButton onLoading={isLoadingForm} type="submit">
            <RocketIcon className="mr-2 h-4 w-4" />
            Submit
          </OnLoadingButton>
          <Button
            variant="secondary"
            onClick={() => router.push(pathname)}
            type="button"
            className="font-medium"
            disabled={isLoadingForm}
          >
            <CrossCircledIcon className="mr-2 h-4 w-4" />
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
