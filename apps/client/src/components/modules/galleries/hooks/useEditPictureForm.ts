import { z } from "zod";
import Picture from "@/components/interfaces/types/Picture";
import updatePictureField from "@/validations/update-picture";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useEditPictureForm(picture: Picture) {
  return useForm<z.infer<typeof updatePictureField>>({
    resolver: zodResolver(updatePictureField),
    defaultValues: {
      title: picture.title,
      description: picture.description,
      link: picture.url,
      expires_in: String(picture.expires_in),
      is_private: String(picture.is_private),
    },
  });
}
