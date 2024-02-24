import PictureFieldFormSchema from "@/validations/pictureField";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import unexpectedErrorToasterMessege from "@/constant/readonly/unexpectedErrorToasterMessege";
import ErrorToastAction from "@/components/molecules/toaster-action/on-error";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import getUserData from "@/services/getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import { faker } from "@faker-js/faker";
import { uploadUserPictureByLink } from "@/services/uploadUserPicture";
import UploadUserPictureData from "@/interfaces/types/UploadUserPictureData";
import PictureDetails from "@/interfaces/types/PictureDetails";

interface OnSubmitFormParams {
  data: z.infer<typeof PictureFieldFormSchema>;
  form: UseFormReturn<z.infer<typeof PictureFieldFormSchema>>;
  router: AppRouterInstance;
  pathname: string;
}

export default async function useOnSubmitForm({
  data,
  form,
  router,
  pathname,
}: OnSubmitFormParams): Promise<void> {
  try {
    const user: Awaited<DecodedUser | null> = await getUserData();

    const pictureExpires: number | null =
      data.expires_in !== "null"
        ? Number(data.expires_in)
        : JSON.parse(data.expires_in);
    const pictureStatus: boolean = data.is_private == "false" ? false : true;

    const pictureDetails: PictureDetails = {
      title: faker.system.fileName().split(".")[0],
      description: faker.lorem.sentences(1),
      image_url: data.link,
    };

    const pictureData: UploadUserPictureData = {
      picture_details: pictureDetails,
      expiresInDays: pictureExpires,
      is_private: pictureStatus,
    };

    await uploadUserPictureByLink({ user, data: pictureData });

    form.reset();
    router.push(pathname);
    router.refresh();

    toast({
      title: "Your Masterpiece Has Landed!",
      description: "The journey of your creativity begins here. Keep shining!",
      action: SuccessToastAction({ title: "Great!" }),
    });
  } catch (err) {
    router.push(pathname);
    toast({
      ...unexpectedErrorToasterMessege,
      action: ErrorToastAction({}),
    });
  }
}
