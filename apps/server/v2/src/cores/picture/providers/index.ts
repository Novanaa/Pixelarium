import { RetrieveUserPictureProvider } from "./retrieve-picture/retrieve-picture.provider";
import { DownloadUserPictureProvider } from "./download-picture/download-picture.provider";
import { DeletePictureProvider } from "./delete-picture/delete-picture.provider";

export {
  RetrieveUserPictureProvider,
  DownloadUserPictureProvider,
  DeletePictureProvider,
};

export default [
  RetrieveUserPictureProvider,
  DownloadUserPictureProvider,
  DeletePictureProvider,
];
