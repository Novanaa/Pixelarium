export class WelcomeResponse {
  name: string;
  messege: string;
  author: string;
  launched: number;
  about: string;
  version: string;
  license: string;
}

export class WebResponse {
  status: "OK" | "KO";
  code: number;
}

export class Cookies {
  session: string;
  logged_as: string;
  logged_in: string;
}
