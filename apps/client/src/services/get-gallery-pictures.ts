import DecodedUser from "@/interfaces/types/DecodedUser";
import axios, { AxiosResponse } from "axios";
import apiUrlEndpoint from "@/constant/readonly/api-url-endpoint";
import User from "@/interfaces/types/User";
import Gallery from "@/components/interfaces/types/Gallery";
import getServerSideUserData from "./get-serverside-user-data";

interface GalleryResponseData {
  owner: User;
  gallery: Gallery;
  total_gallery_pictures: number;
}

export interface GalleryResponseAPI {
  data: GalleryResponseData;
  isSuccess: boolean;
  status: "OK" | "KO";
}

/**
 * Retrieves the gallery pictures for the current user.
 *
 * @returns {Promise<GalleryResponseAPI | null>} A promise that resolves to the gallery response data or null if an error occurs.
 */
export default async function getGalleryPictures(): Promise<GalleryResponseAPI | null> {
  try {
    const user: Awaited<DecodedUser | null> = await getServerSideUserData();

    const galleryPicture: Awaited<AxiosResponse<GalleryResponseAPI>> =
      await axios.get(`${apiUrlEndpoint}/v1/galleries/${user?.name}`);

    return galleryPicture.data;
  } catch (err) {
    return null;
  }
}
