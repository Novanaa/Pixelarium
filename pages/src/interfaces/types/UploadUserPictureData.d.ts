import PictureDetails from "./PictureDetails";

export default interface UploadUserPictureData {
  picture_details: PictureDetails;
  expiresInDays: number | null;
  is_private: boolean;
  use_external_image_url?: boolean;
}
