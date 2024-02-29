import getCookiesData from "./get-cookies-data";

export default async function getUsername(): Promise<string> {
  return (await getCookiesData()).cookies.loggedAs || "0";
}
