import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

interface NextCtaProps extends React.ComponentProps<"button"> {
  title: string;
  link: string;
}

export default function Next({
  link,
  title,
}: NextCtaProps): React.ReactElement {
  return (
    <Link
      className="relative -top-11 flex cursor-pointer flex-col items-end justify-end"
      href={link}
    >
      <Button size="lg" className="font-medium" variant="outline">
        {title}
        <DoubleArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
}
