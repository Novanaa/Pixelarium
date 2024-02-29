import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import axios, { AxiosResponse } from "axios";
import getUserData from "@/services/get-user-data";
import DecodedUser from "@/interfaces/types/DecodedUser";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import UseToastProps from "@/components/interfaces/types/UseToastProps";
import UserSessionTokennizerResponseData from "@/interfaces/types/UserSessionTokennizerResponseData";

interface DeletesPicturesParams {
  router: AppRouterInstance;
  onSuccessRedirectLink: string;
  toaster: UseToastProps;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default async function deletesPictures({
  router,
  onSuccessRedirectLink,
  toaster,
  setIsLoading,
}: DeletesPicturesParams): Promise<void> {
  try {
    setIsLoading(true);
    const user: Awaited<DecodedUser | null> = await getUserData();

    const userSession: Awaited<
      AxiosResponse<UserSessionTokennizerResponseData>
    > = await axios.get(`${apiUrlEndpoint}/v1/auth/token`, {
      withCredentials: true,
    });

    const deletes: Awaited<AxiosResponse> = await axios.delete(
      `${apiUrlEndpoint}/v1/pictures/${user?.name}/removes`,
      {
        headers: {
          Authorization: `Bearer ${userSession.data.token.accessToken}`,
        },
        withCredentials: true,
      },
    );

    if (deletes.data) {
      setIsLoading(false);
      router.push(onSuccessRedirectLink);
      router.refresh();

      toaster.toast({
        title: "Deleted!",
        description: "Successfully deletes your pictures!",
      });
    }
  } catch (err) {
    setIsLoading(false);

    toaster.toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }
}
