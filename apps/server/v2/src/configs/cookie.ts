import { FastifyCookieOptions } from "@fastify/cookie";
import env from "./env";

const cookieConfig: FastifyCookieOptions = {
  secret: env.jwtAccessToken as string,
};

export default cookieConfig;
