import React from "react";

type NavbarMobileMenu = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  isLogin?: boolean;
};

export default NavbarMobileMenu;
