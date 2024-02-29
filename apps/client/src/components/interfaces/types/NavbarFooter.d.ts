type NavbarFooter = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  userSession: boolean | null;
  throttleUser: boolean;
};

export default NavbarFooter;
