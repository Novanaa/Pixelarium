import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jwtDecode } from "jwt-decode";
import client from "../../../../libs/configs/prisma";
import type {
  TDecodedUser,
  TDecodedToken,
} from "../interfaces/types/DecodedUserTypes";
import { JWT_REFRESH_TOKEN, JWT_ACCESS_TOKEN } from "../../../../const/env";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { getFutureDateTimeInSeconds } from "../../../../utils/getFutureDateTime";
import type TokenRotationResponseData from "../interfaces/types/TokenRotationResponseDataTypes";

export default async function tokenRotation(req: Request, res: Response) {
  try {
    const { session } = req.cookies;

    if (!session)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "The user must be login first!",
      });

    const decode: TDecodedUser = jwtDecode(session);

    const isUser = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decode.providerId,
    });

    if (!isUser)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "Unauthorized User",
      });

    jwt.verify(
      session,
      JWT_REFRESH_TOKEN as string,
      // @ts-expect-error Types doesn't match
      (err: VerifyErrors | null, decoded: TDecodedToken | undefined) => {
        if (err)
          return httpUnprocessableContentResponse({
            response: res,
            errorMessage: "The session token is invalid",
          });

        const { providerId, name, email, picture } = decoded as TDecodedToken;
        const accessToken: string = jwt.sign(
          { providerId, email, name, picture },
          JWT_ACCESS_TOKEN as string,
          {
            expiresIn: "1800s",
          }
        );

        const accessTokenExpiresDate: Date = getFutureDateTimeInSeconds({
          futureDateTimeInSecond: 1800,
        });
        const responseData: TokenRotationResponseData = {
          accessToken,
          expiresInSecond: 1800,
          expiresDate: accessTokenExpiresDate.getTime(),
        };

        return jsonResult({
          response: res,
          resultKey: "generated",
          statusCode: http.StatusOk,
          dataKey: "token",
          data: responseData,
        });
      }
    );
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
