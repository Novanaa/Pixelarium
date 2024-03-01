import React from "react";
import { toast } from "@/components/ui/use-toast";
import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpected-error-toaster-messege";
import DecodedUser from "@/interfaces/types/DecodedUser";
import getUserData from "@/services/get-user-data";
import getUserSession from "@/services/get-user-session";
import axios from "axios";
import UserSessionTokennizerResponseData from "@/interfaces/types/UserSessionTokennizerResponseData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import ErrorToastAction from "@/components/molecules/toaster-action/on-error";

interface DeletePictureHandlerParams {
  uniquekey: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: AppRouterInstance;
}

export default async function deletePictureHandler({
  uniquekey,
  setIsLoading,
  router,
}: DeletePictureHandlerParams) {
  try {
    setIsLoading(true);

    const user: Awaited<DecodedUser | null> = await getUserData();

    const userSession: Awaited<UserSessionTokennizerResponseData | null> =
      await getUserSession();

    await axios.delete(
      `${apiUrlEndpoint}/v1/pictures/${user?.name}/${uniquekey}`,
      {
        headers: {
          Authorization: `Bearer ${userSession.token.accessToken}`,
        },
        withCredentials: true,
      },
    );

    setIsLoading(false);
    router.refresh();

    return toast({
      title: "Deleted!",
      description: "Successfully delete your picture!",
      action: SuccessToastAction({}),
    });
  } catch (err) {
    setIsLoading(false);

    return toast({
      ...unexpectedErrorToasterMessege,
      action: ErrorToastAction({}),
    });
  }
}
