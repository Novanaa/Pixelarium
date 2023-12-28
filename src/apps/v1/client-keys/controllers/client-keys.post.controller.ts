import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import newHasher from "../../../../utils/hasher";
import { CryptoHasher } from "bun";
import type { TDecodedUser } from "../../auth/interfaces/types/DecodedUserTypes";
import createSecretClientPattern from "../utils/createSecretClientPattern";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import insertUserClientSecret from "../services/insertUserClientSecret";
import {
  httpBadRequestResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function generateSecretKey(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { session } = req.cookies;

    if (!session)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "The user must be login first!",
      });

    const hasher: CryptoHasher = newHasher("sha256");

    const decoded = req.decoded as TDecodedUser;

    const clientSecretPattern: string = createSecretClientPattern({
      name: decoded.name,
      token: session,
    });

    const clientSecret: string = hasher
      .update(clientSecretPattern)
      .digest("hex");

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: decoded.providerId,
      });

    if (!user)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The request cannot be found",
      });

    await insertUserClientSecret({ userId: user?.id, secret: clientSecret });

    const responseData: { from: UserWithOptionalChaining } = {
      from: {
        ...user,
      },
    };

    delete responseData.from.password;
    delete responseData.from.email;

    return jsonResult<UserWithOptionalChaining>({
      response: res,
      resultKey: "created",
      statusCode: http.StatusCreated,
      dataKey: "data",
      data: responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
