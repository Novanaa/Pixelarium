import logger from "../libs/configs/logger";
import { Request, Response, NextFunction } from "express";
import { ErrorsRespones } from "../utils/Response";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { ClientKey, Subcription, User } from "../../generated/client";
import client from "../libs/configs/prisma";
import userPlans from "../const/readonly/userPlans";

export default async function apiGrantAccess(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
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
      return Error.notFound(res, "The user request cannot be found!");

    if (isUser) {
      const userSubs: Awaited<Subcription | null> =
        await client.subcription.findUnique({
          where: { user_id: isUser.id },
        });

      if (!userSubs)
        return Error.notFound(res, "The user subscription cannot be found");

      const premiumUserPlans: string | undefined = userPlans.shift() || "none";
      const includedPremiumUserPlans: boolean = premiumUserPlans.includes(
        userSubs.plan
      );

      if (!includedPremiumUserPlans)
        return Error.unprocessable(
          res,
          "The user plans must be at least 'Gold' plan"
        );

      if (userSubs.status == "deactive")
        return Error.unprocessable(res, "The user plans must be active!");

      if (includedPremiumUserPlans && userSubs.status == "active")
        return next();
    }
  } catch (err) {
    logger.error(err);
    return Error.badRequest(res);
  } finally {
    await client.$disconnect();
  }
}
