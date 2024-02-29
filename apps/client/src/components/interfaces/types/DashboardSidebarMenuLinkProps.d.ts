import React from "react";

export default interface DashboardSidebarMenuLinkProps
  extends React.ComponentProps<"div"> {
  title: string;
  Icon: React.ReactElement;
  link: string,
}
