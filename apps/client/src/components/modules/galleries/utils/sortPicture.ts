import Picture from "@/components/interfaces/types/Picture";

interface SortPictureParams {
  array: Array<Picture> | undefined;
  by: string;
}

export default function sortPicture({ array, by }: SortPictureParams) {
  const now: number = Date.now();
  return {
    alpha: array?.slice().sort((a, b) => a.title.localeCompare(b.title)),
    oldest: array
      ?.slice()
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      ),
    recent: array?.slice().sort((a, b): number => {
      const aTime: number = new Date(a.createdAt).getTime();
      const bTime: number = new Date(b.createdAt).getTime();

      const deltaA: number = Math.abs(now - aTime);
      const deltaB: number = Math.abs(now - bTime);

      return deltaA - deltaB;
    }),
  }[by];
}
