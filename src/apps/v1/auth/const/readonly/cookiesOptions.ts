import { CookieOptions } from "express";
import { NODE_ENV } from "../../../../../const/env";

const isSecured = NODE_ENV == "production" ? true : false;

const cookiesOptions: CookieOptions = {
  secure: isSecured,
  httpOnly: true,
  sameSite: "none",
};

export default cookiesOptions;
