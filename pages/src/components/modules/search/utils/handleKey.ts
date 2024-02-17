import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface HandleKeyProps {
  ev: KeyboardEvent;
  router: AppRouterInstance;
}

export default function handleKey({ router, ev }: HandleKeyProps): void {
  console.log(ev);
  if (ev.key == "/") {
    ev.preventDefault();
    router.push("/galleries?active=search");
  }
  if (ev.key == "Escape") {
    ev.preventDefault();
    router.push("/galleries");
  }
}
