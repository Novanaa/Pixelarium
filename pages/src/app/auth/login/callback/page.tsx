import UserAuthLoginCallback from "@/components/modules/auth/callback";
import LoginCallbackLoader from "@/components/modules/auth/callback/Loader";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Welcome to Pixelarium!",
  description: "Pixelarium Login Callback Pages",
};

function LoginCallback(): React.ReactElement {
  return (
    <Suspense fallback={<LoginCallbackLoader />}>
      <UserAuthLoginCallback />
    </Suspense>
  );
}

export default LoginCallback;
