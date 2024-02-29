import React, { Suspense } from "react";
import UploadSection from "./section";
import UploadPageLoading from "./loading";

export default function Upload(): React.ReactElement {
  return (
    <Suspense fallback={<UploadPageLoading />}>
      <UploadSection />
    </Suspense>
  );
}
