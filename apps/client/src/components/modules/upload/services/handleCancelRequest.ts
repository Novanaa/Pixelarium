import SuccessToastAction from "@/components/molecules/toaster-action/on-success";
import { toast } from "@/components/ui/use-toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface HandleCancelRequestParams {
  router: AppRouterInstance;
  pathname: string;
}

export default function handleCancelRequest({
  router,
  pathname,
}: HandleCancelRequestParams) {
  const controller: AbortController = new AbortController();
  controller.abort();

  router.push(pathname);
  router.refresh();

  toast({
    title: "Your request has been canceled!",
    description: "The journey of your creativity begins here. Keep shining!",
    action: SuccessToastAction({ title: "Great!" }),
  });
}
