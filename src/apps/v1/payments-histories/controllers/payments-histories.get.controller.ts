import { Request, Response } from "express";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import getUserPaymentsHistories from "../services/getUserPaymentsHistories";
import { PaymentsHistory } from "../../../../../generated/client";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

type UserPaymentsHistoriesResponseData = {
  owner: UserWithOptionalChaining;
  histories: Array<PaymentsHistory>;
};

export default async function userPaymentsHistories(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { name } = req.params;

    const user: Awaited<UserWithOptionalChaining | null> =
      await isUserExistByNameOrEmail({ field: "name", value: name });

    if (!user) return httpNotFoundResponse({ response: res });

    delete user.email;
    delete user.password;

    const userPaymentsHistoriesData: Awaited<Array<PaymentsHistory>> =
      await getUserPaymentsHistories(user.id);

    const responseData: UserPaymentsHistoriesResponseData = {
      owner: user,
      histories: userPaymentsHistoriesData,
    };

    return sendJsonResultHttpResponse<UserPaymentsHistoriesResponseData>({
      response: res,
      responseData,
    });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
