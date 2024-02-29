import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import client from "../../../../libs/configs/prisma";
import getUserByName from "../services/getUserByName";
import { jsonResult } from "../../../../utils/responses/httpApiResponses";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import http from "../../../../const/readonly/httpStatusCode";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";

export default async function singleUser(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await getUserByName(name);

    if (!user) return httpNotFoundResponse({ response: res });

    return jsonResult<UserWithOptionalChaining>({
      response: res,
      statusCode: http.StatusOk,
      resultKey: "isSuccess",
      dataKey: "user",
      data: user,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
