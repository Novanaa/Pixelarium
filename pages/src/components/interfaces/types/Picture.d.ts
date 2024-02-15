export default interface Picture {
  id: number;
  uniquekey: string;
  title: string;
  description: string;
  url: string;
  filename: string;
  extension: string;
  expires_in?: number | null;
  is_external_picture: boolean;
  is_private: boolean;
  gallery_id: number;
  album_id?: number | null;
  favorite_id?: number | null;
  createdAt: Date;
  updatedAt: Date;
}
