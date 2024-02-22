import LogoIcons from "@/components/molecules/LogoIcons";
import { HeadingThree } from "@/components/molecules/typographies/Heading";
import { jakartaSans } from "@/configs/fonts";
import { cn } from "@/lib/utils";

export default function DashboardSidebarHeader(): React.ReactElement {
  return (
    <a href="/" className={cn("flex h-fit items-center gap-1")}>
      <LogoIcons
        width={40}
        height={40}
        className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"
      />
      <HeadingThree
        className={cn(
          "hidden font-sans font-semibold opacity-85 lg:block",
          jakartaSans.className,
        )}
      >
        Pixelarium
      </HeadingThree>
    </a>
  );
}
