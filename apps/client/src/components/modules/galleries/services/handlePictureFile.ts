interface HandlePictureFileParams {
  ev: React.ChangeEvent<HTMLInputElement>;
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>;
  setPictureFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function handlePictureFile({
  ev,
  setPictureFile,
  setPreviewImage,
}: HandlePictureFileParams) {
  const pictures = ev.target.files;

  if (pictures?.length) {
    const userPictureFile: File = pictures[0];
    setPreviewImage(URL.createObjectURL(userPictureFile));
    setPictureFile(userPictureFile);
  }
}
