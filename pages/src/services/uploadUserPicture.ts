import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import DecodedUser from "@/interfaces/types/DecodedUser";
import UploadUserPictureData from "@/interfaces/types/UploadUserPictureData";
import axios from "axios";

interface UploadUserPictureByLinkParams {
  user: DecodedUser | null;
  data: UploadUserPictureData;
}

export async function uploadUserPictureByLink({
  user,
  data,
}: UploadUserPictureByLinkParams): Promise<void> {
  await axios.post(`${apiUrlEndpoint}/v1/pictures/${user?.name}/upload`, {
    ...data,
    use_external_image_url: true,
  });
}
