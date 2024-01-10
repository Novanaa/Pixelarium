type TUpdateUserGalleryPictureField = {
  title: string;
  description: string;
  url: string;
  is_favorited: boolean;
  is_private: boolean;
  filename: string;
  extension: string;
  expires_in: number | null;
  is_external_picture: boolean;
};

export default TUpdateUserGalleryPictureField;
