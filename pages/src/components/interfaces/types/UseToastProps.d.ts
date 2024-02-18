export default interface UseToastProps {
  toast: ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
  };
  dismiss: (toastId?: string | undefined) => void;
  toasts: ToasterToast[];
}
