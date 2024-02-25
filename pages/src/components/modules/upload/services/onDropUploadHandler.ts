import ErrorToastAction from "@/components/molecules/toaster-action/on-error";
import { toast } from "@/components/ui/use-toast";
import pictureLimitSize from "@/constant/readonly/pictureSizeLimit";
import DecodedUser from "@/interfaces/types/DecodedUser";
import Subscription from "@/interfaces/types/Subscription";
import getUserData from "@/services/getUserData";
import getUserSubscriptionStatus, {
  GetUserSubscriptionStatusReturnType,
} from "@/services/getUserSubscriptionStatus";
import mime from "mime";
import allowedPictureType from "../constant/readonly/allowedPictureType";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import PictureDetails from "@/interfaces/types/PictureDetails";
import {
  setPictureUploadImageBloblSrcState,
  setPictureUploadProgressState,
  setPictureUploadStartedState,
} from "@/stores/reducers/pictureUpload";
import axios from "axios";
import React from "react";
import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpectedErrorToasterMessege";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AppDispatch } from "@/stores";

interface OnDropUploadHandlerParams {
  router: AppRouterInstance;
  dispatch: AppDispatch;
  pathname: string;
  ev: React.DragEvent<HTMLDivElement>;
}

export default async function onDropUploadHandler({
  dispatch,
  ev,
  pathname,
  router,
}: OnDropUploadHandlerParams): Promise<void> {
  ev.preventDefault();
  const controller: AbortController = new AbortController();
  const formData: FormData = new FormData();
  try {
    const eventDataTransfer: DataTransfer = ev.dataTransfer;
    const itemsList: DataTransferItemList = eventDataTransfer.items;
    const item: DataTransferItem = itemsList[0];
    const mimeTypeFile: string = item.type;
    const extFile: string | null = mime.getExtension(mimeTypeFile);
    const picturesList: FileList = eventDataTransfer.files;
    const picture: File = picturesList[0];
    const user: Awaited<DecodedUser | null> = await getUserData();
    const userSubscription: Awaited<GetUserSubscriptionStatusReturnType | null> =
      await getUserSubscriptionStatus();
    const subscription: Subscription | undefined = userSubscription?.status;
    let userLimitUploadSize: number =
      pictureLimitSize[subscription?.plan || "none"];

    const invalidFileTypeErrorMessege: string = extFile
      ? `Please drop your masterpiece picture, not a ${extFile} file`
      : "Cannot upload your folder.";

    if (subscription?.status == "deactive") userLimitUploadSize = 15;

    if (!picture) {
      toast({
        title: "Reader error",
        description: "Please drop a your masterpiece picture.",
        action: ErrorToastAction({}),
      });

      return;
    }

    if (picturesList.length > 1) {
      toast({
        title: "Reader error",
        description: "Pixelarium doesn't support multiple pictures upload.",
        action: ErrorToastAction({}),
      });

      return;
    }

    if (!mimeTypeFile.startsWith("image")) {
      toast({
        title: "Reader error",
        description: invalidFileTypeErrorMessege,
        action: ErrorToastAction({}),
      });

      return;
    }

    if (!allowedPictureType.includes(String(extFile).toLowerCase())) {
      toast({
        title: "Reader error",
        description: "The picture file extension was not supported.",
        action: ErrorToastAction({}),
      });

      return;
    }

    if (picture.size > userLimitUploadSize * 1024 * 1024) {
      controller.abort();

      router.push(pathname);
      router.refresh();

      toast({
        title: "Its time to upgrade your account!!",
        description: `The picture file size must be less than ${userLimitUploadSize}mb.`,
        action: ErrorToastAction({}),
      });

      return;
    }

    const endpoint: string = `${apiUrlEndpoint}/v1/pictures/${user?.name}/upload`;
    const pictureName: string = picture.name.split(".")[0];
    const picture_details: PictureDetails = {
      title: pictureName,
      description: "This picture doesn't have a description",
    };

    formData.append("picture", picture);
    formData.append("expiresInDays", "30");
    formData.append("is_private", "true");
    formData.append("picture_details", JSON.stringify(picture_details));
    formData.append("use_external_image_url", "false");

    const pictureUrl: string = URL.createObjectURL(picture);
    dispatch(setPictureUploadImageBloblSrcState(pictureUrl));
    dispatch(setPictureUploadStartedState(true));

    await axios.post(endpoint, formData, {
      onUploadProgress: (p) =>
        dispatch(setPictureUploadProgressState(p.progress! * 100)),
    });

    router.push(pathname);
    router.refresh();

    dispatch(setPictureUploadStartedState(false));

    toast({
      title: "Your Masterpiece Has Landed!",
      description: "The journey of your creativity begins here. Keep shining!",
      action: SuccessToastAction({ title: "Great!" }),
    });
  } catch (err) {
    router.push(pathname);
    router.refresh();

    toast({
      ...unexpectedErrorToasterMessege,
      action: ErrorToastAction({}),
    });

    return;
  }
}
