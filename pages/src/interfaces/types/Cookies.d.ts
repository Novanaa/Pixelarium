type CookiesData = {
  cookies: Cookies;
};

type Cookies = {
  session: string | null;
  isLoggedIn: "yes" | null;
  loggedAs: string | null;
};

export default CookiesData;
