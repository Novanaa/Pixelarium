import getCookiesData from "./getCookiesData";

export default async function getUsername(): Promise<string> {
  return (await getCookiesData()).cookies.loggedAs || "0";
}
