import logger from "../libs/configs/logger";
import { Request, Response, NextFunction } from "express";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { ClientKey, Subcription, User } from "../../generated/client";
import client from "../libs/configs/prisma";
import userPlans from "../const/readonly/userPlans";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnprocessableContentResponse,
} from "../utils/responses/httpErrorsResponses";

export default async function apiGrantAccess(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  try {
    const { client_id } = req.query;

    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: {
          client_id: client_id as string,
        },
      });

    const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "id",
      value: userClientKeys?.user_id,
    });

    if (!isUser)
      return httpNotFoundResponse({
        response: res,
        errorMessage: "The user request cannot be found!",
      });

    if (isUser) {
      const userSubs: Awaited<Subcription | null> =
        await client.subcription.findUnique({
          where: { user_id: isUser.id },
        });

      if (!userSubs)
        return httpNotFoundResponse({
          response: res,
          errorMessage: "The user subscription cannot be found",
        });

      const premiumUserPlans: string | undefined = userPlans.shift() || "none";
      const includedPremiumUserPlans: boolean = premiumUserPlans.includes(
        userSubs.plan
      );

      if (!includedPremiumUserPlans)
        return httpUnprocessableContentResponse({
          response: res,
          errorMessage: "The user plans must be at least 'Gold' plan",
        });

      if (userSubs.status == "deactive")
        return httpUnprocessableContentResponse({
          response: res,
          errorMessage: "The user plans must be active!",
        });

      if (includedPremiumUserPlans && userSubs.status == "active")
        return next();
    }
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
