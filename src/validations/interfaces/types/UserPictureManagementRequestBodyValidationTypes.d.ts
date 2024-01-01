type UserPictureManagementRequestBodyValidationTypes = {
  expiresInDays: number;
  is_private: boolean;
  use_external_image_url: boolean;
  picture: Picture;
};

type Picture = {
  title: string;
  description: string;
  image: string | null | undefined;
};

export default UserPictureManagementRequestBodyValidationTypes;
