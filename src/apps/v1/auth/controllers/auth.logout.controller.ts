import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpUnauthorizedResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import { jwtDecode } from "jwt-decode";
import { TDecodedUser } from "../interfaces/types/DecodedUserTypes";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import http from "../../../../const/readonly/httpStatusCode";
import cookiesOptions from "../const/readonly/cookiesOptions";
import client from "../../../../libs/configs/prisma";

export default async function logout(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { session, logged_in, logged_as } = req.cookies;

    if (!session) return httpUnauthorizedResponse({ response: res });

    const decoded: TDecodedUser = jwtDecode(session);

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: decoded.providerId,
      });

    if (!user)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Cannot find user request!",
      });

    delete user.password;
    delete user.email;

    if (session) res.clearCookie("session");
    if (logged_as) res.clearCookie("logged_in");

    if (logged_in) res.cookie("logged_in", false, cookiesOptions);

    return jsonResult<UserWithOptionalChaining>({
      response: res,
      statusCode: http.StatusOk,
      resultKey: "logouted",
      dataKey: "logutedUser",
      data: user,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
