import DecodedUser from "@/interfaces/types/DecodedUser";
import React from "react";

interface PictureProfileSidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: DecodedUser | null;
  isLoading: boolean;
}

export default PictureProfileSidebarProps;
