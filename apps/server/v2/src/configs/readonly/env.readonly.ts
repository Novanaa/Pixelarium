import { Injectable } from "@nestjs/common";

@Injectable()
export class Environment {
  static readonly NODEENV: string = process.env.NODE_ENV;

  static readonly DATABASE = {
    URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
  };

  static readonly JSONWEBTOKEN = {
    ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
    REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN,
  };

  static readonly GOOGLE = {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  };

  static readonly MIDTRANS = {
    CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
    SECRET_KEY: process.env.MIDTRANS_SECRET_KEY,
    ENDPOINT: process.env.MIDTRANS_API_ENDPOINT,
  };

  static readonly GITHUB = {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  };

  static readonly HOSTNAME: string = process.env.HOSTNAME;

  static readonly CLIENT_HOSTNAME: string = process.env.CLIENT_HOSTNAME;

  static readonly PORT: number = 8000 || Number(process.env.PORT);
}
