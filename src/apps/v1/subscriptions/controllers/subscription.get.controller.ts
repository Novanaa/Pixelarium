import { Request, Response } from "express";
import pricesList from "../../../../../resources/prices-list.json";
import logger from "../../../../libs/configs/logger";
import {
  httpBadRequestResponse,
  httpNotFoundResponse,
} from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";
import { UserWithOptionalChaining } from "../../../../interfaces/UserWithOptionalChaining";
import { isUserExistByNameOrEmail } from "../../../../utils/isUser";
import { Subscription } from "../../../../../generated/client";
import getUserSubscription from "../../../../utils/getUserSubscription";
import sendJsonResultHttpResponse from "../../../../services/sendJsonResultHttpResponse";

export function prices(_: Request, res: Response): Response {
  return res.status(200).json(pricesList);
}

type UserSubscriptionStatusResponseData = {
  user_details: UserWithOptionalChaining;
  subscription_details: Subscription;
};

export async function userSubscriptionStatus(
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

    delete user.password;
    delete user.email;

    const userSubs: Awaited<Subscription | null> = await getUserSubscription(
      user.id
    );

    if (!userSubs)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "Unexpected Errors Occurred",
      });

    const responseData: UserSubscriptionStatusResponseData = {
      user_details: user,
      subscription_details: userSubs,
    };

    return sendJsonResultHttpResponse({ response: res, responseData });
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}

export async function subscriptionPaymentsCallback(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    return res.send("testtt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
