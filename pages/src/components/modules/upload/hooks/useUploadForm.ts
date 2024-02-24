import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PictureFieldFormSchema from "@/validations/pictureField";
import { z } from "zod";

export default function useUploadForm() {
  return useForm<z.infer<typeof PictureFieldFormSchema>>({
    resolver: zodResolver(PictureFieldFormSchema),
    defaultValues: {
      link: "",
    },
  });
}
