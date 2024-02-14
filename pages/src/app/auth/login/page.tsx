import React, { Suspense } from "react";
import LoginProviderCard, { Loading } from "@/components/modules/auth/login";
import { Metadata } from "next";
import RootLayout from "@/layouts/Layout";

export const metadata: Metadata = {
  title: "Let's Discover your contributions on Pixelarium!",
  description: "Pixelarium Login Pages",
};

function Login() {
  return (
    <RootLayout>
      <Suspense fallback={<Loading />}>
        <LoginProviderCard />
      </Suspense>
    </RootLayout>
  );
}

export default Login;
