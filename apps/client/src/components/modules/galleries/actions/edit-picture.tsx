"use client";

import { z } from "zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ActionState from "../interfaces/types/ActionsState";
import { Form } from "@/components/ui/form";
import updatePictureField from "@/validations/update-picture";
import Picture from "@/components/interfaces/types/Picture";
import FormSelectFieldItem from "@/components/molecules/forms/select-field-item";
import linkContentSelectExpiresValue from "../../upload/constant/readonly/linkContentSelectExpiresValue";
import linkContentSelectStatusValue from "../../upload/constant/readonly/linkContentSelectStatusValue";
import FormFieldItem from "@/components/molecules/forms/field-item";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import onErrorHandler from "@/utils/on-error-picture-handler";
import { ReloadIcon, UploadIcon } from "@radix-ui/react-icons";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import allowedPictureType from "../../upload/constant/readonly/allowedPictureType";
import editPicture from "../services/edit-picture";
import handlePictureFile from "../services/handlePictureFile";
import useEditPictureForm from "../hooks/useEditPictureForm";

interface EditPictureProps extends React.ComponentProps<"div"> {
  uniquekey: string;
  state: boolean;
  setterState: React.Dispatch<React.SetStateAction<ActionState>>;
  picture: Picture;
}

export default function EditPicture({
  state,
  setterState,
  picture,
}: EditPictureProps): React.ReactElement {
  const [previewImage, setPreviewImage] = useState<string>(picture.url);
  const [pictureFile, setPictureFile] = useState<File | null>(null);
  const router: AppRouterInstance = useRouter();
  const form = useEditPictureForm(picture);

  const isLoadingForm: boolean = form.formState.isSubmitting;

  return (
    <Dialog
      open={state || undefined}
      onOpenChange={(state: boolean) =>
        setterState((prev) => ({ ...prev, edit: state }))
      }
    >
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Edit Picture</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(
              (data: z.infer<typeof updatePictureField>) =>
                editPicture({
                  data,
                  picture,
                  router,
                  setterState,
                  pictureFile,
                }),
            )}
            className="flex flex-col gap-4"
          >
            {!picture.is_external_picture && (
              <div
                className="group flex h-[10rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg border hover:bg-background/80 hover:grayscale"
                onClick={() => document.getElementById("input-file")?.click()}
              >
                <LazyLoadImage
                  effect="black-and-white"
                  src={previewImage}
                  className="flex h-[10rem] rounded object-fill object-center"
                  onError={({ target }) => onErrorHandler(target)}
                  alt={picture.title}
                />
                <UploadIcon className="absolute mx-auto hidden h-7 w-7 opacity-80 group-hover:block" />
                <input
                  type="file"
                  id="input-file"
                  className="hidden"
                  onChange={(ev) =>
                    handlePictureFile({ ev, setPictureFile, setPreviewImage })
                  }
                  accept={allowedPictureType}
                />
              </div>
            )}
            <FormFieldItem
              name="title"
              form={form}
              placeholder="Your picture title"
              label="Picture title"
              isLoading={isLoadingForm}
            />
            <FormFieldItem
              name="description"
              form={form}
              placeholder="Your picture description"
              label="Picture description"
              isLoading={isLoadingForm}
            />
            {picture.is_external_picture && (
              <FormFieldItem
                name="link"
                form={form}
                placeholder="Your picture link"
                label="Picture link"
                isLoading={isLoadingForm}
              />
            )}
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
            {isLoadingForm ? (
              <Button disabled className="font-medium">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </Button>
            ) : (
              <Button type="submit" className="font-medium">
                Save changes
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
