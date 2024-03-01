import ErrorToastAction from "@/components/molecules/toaster-action/on-error";
import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import { toast } from "@/components/ui/use-toast";
import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpected-error-toaster-messege";
import DecodedUser from "@/interfaces/types/DecodedUser";
import ErrorResponse from "@/interfaces/types/ErrorResponse";
import getUserData from "@/services/get-user-data";
import axios, { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface DownloadPictureParams {
  uniquekey: string;
  router: AppRouterInstance;
}

export default async function downloadPicture({
  uniquekey,
  router,
}: DownloadPictureParams) {
  try {
    const user: Awaited<DecodedUser | null> = await getUserData();
    const endpoint: string = `${apiUrlEndpoint}/v1/pictures/download/${user?.name}/${uniquekey}`;

    await axios.get(endpoint);

    router.push(endpoint);

    return toast({
      title: "Enjoy the beauty captured picture!",
      description:
        "Thank you for being part of our community and enriching your day with this beautiful picture!",
      action: SuccessToastAction({}),
    });
  } catch (error) {
    const err: AxiosError<ErrorResponse> = error as AxiosError<ErrorResponse>;
    const responseData: ErrorResponse | undefined = err.response?.data;
    const responseDataMessege: string = String(responseData?.messege as string);

    if (responseDataMessege)
      return toast({
        ...unexpectedErrorToasterMessege,
        description: responseDataMessege,
        action: ErrorToastAction({}),
      });

    return toast({
      ...unexpectedErrorToasterMessege,
      action: ErrorToastAction({}),
    });
  }
}
