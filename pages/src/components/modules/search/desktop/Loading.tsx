import { Skeleton } from "@/components/ui/skeleton";

export default function DesktopSearchLoading(): React.ReactElement {
  return (
    <div className="fixed left-0 top-0 z-30 flex h-[100dvh] w-full items-center justify-center bg-black/50">
      <Skeleton className="h-[20rem] w-[32rem] rounded-lg border shadow-md" />
    </div>
  );
}
