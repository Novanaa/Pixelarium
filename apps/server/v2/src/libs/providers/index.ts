import { PrismaProvider } from "./prisma-client/prisma.provider";
import { GoogleProvider } from "./google/google.provider";
import { GithubProvider } from "./github/github.provider";

export { PrismaProvider, GoogleProvider, GithubProvider };

export default [PrismaProvider, GoogleProvider, GithubProvider];
