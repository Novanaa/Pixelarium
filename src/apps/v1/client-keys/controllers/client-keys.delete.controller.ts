import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { TDecodedUser } from "../../auth/interfaces/types/DecodedUserTypes";
import { isUserExistByIdOrProviderId } from "../../../../utils/isUser";
import { ClientKey } from "../../../../../generated/client";
import deleteUserClientSecret from "../services/deleteUserClientSecret";
import findUserClientKeys from "../services/findUserClientKeys";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function removeClientKey(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { session } = req.cookies;

    if (!session)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "You must be login first!",
      });

    const decode = req.decoded as TDecodedUser;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByIdOrProviderId({
        field: "provider_id",
        value: decode.providerId,
      });

    if (!user)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "Your request doesn't be found",
      });

    const userClientKeys: Awaited<ClientKey | null> = await findUserClientKeys(
      user.id
    );

    if (!userClientKeys?.client_secret)
      return httpUnprocessableContentResponse({
        response: res,
        errorMessage: "The User Client Secret Ins't Exist.",
      });

    if (user && userClientKeys.client_secret) {
      await deleteUserClientSecret(user.id);
    }

    const responseData = {
      from: {
        ...user,
      },
      deletedClientKeys: {
        user_client_id: userClientKeys.client_id,
        user_client_secret: userClientKeys.client_secret,
      },
    };

    delete responseData.from.email;
    delete responseData.from.password;

    return jsonResult({
      response: res,
      statusCode: http.StatusOk,
      resultKey: "deleted",
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
