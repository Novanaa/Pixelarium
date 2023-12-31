import logger from "../libs/configs/logger";
import { Request, Response, NextFunction } from "express";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { ClientKey, Subscription, User } from "../../generated/client";
import client from "../libs/configs/prisma";
import userPlans from "../const/readonly/userPlans";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
  httpUnauthorizedResponse,
  httpUnprocessableContentResponse,
} from "../utils/responses/httpErrorsResponses";

export default async function apiGrantAccess(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  try {
    const { client_id, client_secret } = req.query;

    const userClientKeys: Awaited<ClientKey | null> =
      await client.clientKey.findUnique({
        where: {
          client_id: client_id as string,
          client_secret: client_secret as string,
        },
      });

    if (!userClientKeys)
      return httpUnauthorizedResponse({
        response: res,
        errorMessage: "Invalid Credentials Keys!",
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
      const userSubs: Awaited<Subscription | null> =
        await client.subscription.findUnique({
          where: { user_id: isUser.id },
        });

      if (!userSubs)
        return httpNotFoundResponse({
          response: res,
          errorMessage: "The user subscription cannot be found",
        });

      const premiumUserPlans: string[] = userPlans.filter((p) => p !== "none");
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
