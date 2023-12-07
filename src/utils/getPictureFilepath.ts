type UsageType = "users" | "galleries" | "albums";

export default function getPictureFilepath({
  usage,
}: {
  usage: UsageType;
}): string {
  const defaultPicturePath: string = "img/users/profiles/pictures";

  const includedPicturePath: string =
    {
      users: defaultPicturePath,
      albums: "img/albums/pictures",
      galleries: "img/galleries/pictures",
    }[usage] || defaultPicturePath;

  return includedPicturePath;
}
