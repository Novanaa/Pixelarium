"use client";

import Paragraph from "@/components/ui/Typographies/Paragraph";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
  const form = useForm<z.infer<typeof PictureFieldFormSchema>>({
    resolver: zodResolver(PictureFieldFormSchema),
  });

  function onSubmit(data: z.infer<typeof PictureFieldFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-[85%] flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picture Title</FormLabel>
              <FormControl>
                <Input placeholder="Your picture title" {...field} />
              </FormControl>
              <FormDescription>This is your picture title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
