import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import { toast } from "@/components/ui/use-toast";
import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import DecodedUser from "@/interfaces/types/DecodedUser";
import PictureDetails from "@/interfaces/types/PictureDetails";
import getUserData from "@/services/getUserData";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpectedErrorToasterMessege";
import ErrorToastAction from "@/components/molecules/toaster-action/on-error";
import Subscription from "@/interfaces/types/Subscription";
import getUserSubscriptionStatus, {
  GetUserSubscriptionStatusReturnType,
} from "@/services/getUserSubscriptionStatus";
import pictureLimitSize from "@/constant/readonly/pictureSizeLimit";
import {
  setPictureUploadImageBloblSrcState,
  setPictureUploadProgressState,
  setPictureUploadStartedState,
} from "@/stores/reducers/pictureUpload";
import { AppDispatch } from "@/stores";

interface HandleUploadPictureParams {
  ev: React.ChangeEvent<HTMLInputElement>;
  router: AppRouterInstance;
  pathname: string;
  dispatch: AppDispatch;
}

export default async function handleUploadPicture({
  ev,
  router,
  pathname,
  dispatch,
}: HandleUploadPictureParams) {
  const controller: AbortController = new AbortController();
  const pictures: FileList | null = ev.target.files;
  const formData: FormData = new FormData();
  try {
    if (pictures && pictures[0]) {
      const picture: File | null = pictures[0];
      const user: Awaited<DecodedUser | null> = await getUserData();
      const userSubscription: Awaited<GetUserSubscriptionStatusReturnType | null> =
        await getUserSubscriptionStatus();
      const subscription: Subscription | undefined = userSubscription?.status;
      const pictureFileSize: number = picture.size;
      let userLimitUploadSize: number = pictureLimitSize[
        subscription?.plan || "none"
      ] as number;
      if (subscription?.status == "deactive") userLimitUploadSize = 15;

      if (pictureFileSize > userLimitUploadSize * 1024 * 1024) {
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

      const pictureName: string = picture.name.split(".")[0];
      const endpoint: string = `${apiUrlEndpoint}/v1/pictures/${user?.name}/upload`;

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
        description:
          "The journey of your creativity begins here. Keep shining!",
        action: SuccessToastAction({ title: "Great!" }),
      });
    }
  } catch (err) {
    router.push(pathname);
    toast({
      ...unexpectedErrorToasterMessege,
      action: ErrorToastAction({}),
    });
  }
}
