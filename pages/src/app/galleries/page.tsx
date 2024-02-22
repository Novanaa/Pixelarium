import DashboardLayout from "@/layouts/dashboard";
import { Metadata } from "next";
import React from "react";
import getServerSideUserData from "@/services/getServerSideUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import capitalize from "capitalize";
import UserGallery from "@/components/modules/galleries";

export async function generateMetadata(): Promise<Metadata> {
  const user: Awaited<DecodedUser | null> = await getServerSideUserData();
  const username: string = capitalize(String(user?.name));
  const title: string = `${username}'s Galleries`;

  return {
    title,
    description: "Pixelarium Galleries Pages",
  };
}

export default function Galleries(): React.ReactElement {
  return (
    <DashboardLayout>
      <UserGallery />
    </DashboardLayout>
  );
}
