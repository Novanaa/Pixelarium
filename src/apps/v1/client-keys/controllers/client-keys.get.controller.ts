import { Request, Response } from "express";
import client from "../../../../libs/configs/prisma";
import logger from "../../../../libs/configs/logger";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { ClientKey } from "../../../../../generated/client";
import findUserClientKeys from "../services/findUserClientKeys";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function getClientSecret(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({
        field: "name",
        value: name,
      });

    if (!user) return httpNotFoundResponse({ response: res });

    if (user) {
      const userClientKeys: Awaited<ClientKey | null> =
        await findUserClientKeys(user.id);

      const responseData = {
        from: { ...user },
        client_keys: {
          user_client_id: userClientKeys?.client_id,
          user_client_secret: userClientKeys?.client_secret,
        },
      };

      delete responseData.from.password;
      delete responseData.from.email;

      return jsonResult({
        statusCode: http.StatusOk,
        response: res,
        resultKey: "isSuccess",
        dataKey: "data",
        data: responseData,
      });
    }
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
