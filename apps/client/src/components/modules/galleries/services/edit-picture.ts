import { z } from "zod";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import ActionState from "../interfaces/types/ActionsState";
import Picture from "@/components/interfaces/types/Picture";
import updatePictureField from "@/validations/update-picture";
import getUserData from "@/services/get-user-data";
import DecodedUser from "@/interfaces/types/DecodedUser";
import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import axios, { AxiosError } from "axios";
import { toast } from "@/components/ui/use-toast";
import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import ErrorResponse from "@/interfaces/types/ErrorResponse";
import ErrorToastAction from "@/components/molecules/toaster-action/on-error";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpected-error-toaster-messege";

interface EditPictureParams {
  data: z.infer<typeof updatePictureField>;
  picture: Picture;
  router: AppRouterInstance;
  setterState: React.Dispatch<React.SetStateAction<ActionState>>;
  pictureFile: File | null;
}

export default async function editPicture({
  data,
  picture,
  router,
  setterState,
  pictureFile,
}: EditPictureParams) {
  const formData: FormData = new FormData();
  try {
    const user: Awaited<DecodedUser | null> = await getUserData();
    const endpoint: string = `${apiUrlEndpoint}/v1/pictures/${user?.name}/${picture.uniquekey}`;
    const status: boolean = data.is_private == "true" ? true : false;
    const imageUrl: string = data.link;
    const pictureExpiresTime: number | null =
      data.expires_in == "null" ? null : Number(data.expires_in);

    if (picture.is_external_picture) {
      await axios.patch(endpoint, {
        image_url: imageUrl,
        title: data.title,
        description: data.description,
        expiresInDays: pictureExpiresTime,
        is_private: status,
      });

      setterState((prev) => ({ ...prev, edit: false }));
      router.refresh();

      return toast({
        title: "Updated!",
        description: "Successfully update your picture!",
        action: SuccessToastAction({}),
      });
    }

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("expiresInDays", String(pictureExpiresTime));
    formData.append("is_private", String(status));

    if (pictureFile) formData.append("picture", pictureFile);

    await axios.patch(endpoint, formData);

    setterState((prev) => ({ ...prev, edit: false }));
    router.refresh();

    return toast({
      title: "Updated!",
      description: "Successfully update your picture!",
      action: SuccessToastAction({}),
    });
  } catch (error) {
    const err: AxiosError<ErrorResponse> = error as AxiosError<ErrorResponse>;
    const responseData: ErrorResponse | undefined = err.response?.data;
    const responseDataMessege: string | undefined = responseData?.messege;

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
