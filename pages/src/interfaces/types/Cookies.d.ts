type CookiesData = {
  cookies: Cookies;
};

type Cookies = {
  session: string | null;
  isLoggedIn: "yes" | null;
};

export default CookiesData;
