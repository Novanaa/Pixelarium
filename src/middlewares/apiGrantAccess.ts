import logger from "../libs/configs/logger";
import { Request, Response, NextFunction } from "express";
import { ErrorsRespones } from "../utils/Response";
import { isUserExistByIdOrProviderId } from "../utils/isUser";
import { Subcription, User } from "../../generated/client";
import client from "../libs/configs/prisma";
import { TDecodedUser } from "../apps/v1/auth/interfaces/types/DecodedUserTypes";
import userPlans from "../const/readonly/userPlans";
import { jwtDecode } from "jwt-decode";

export default async function apiGrantAccess(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const Error: ErrorsRespones = new ErrorsRespones();
  try {
    const { session } = req.cookies;

    if (!session)
      return Error.unauth(res, "This operation required a session token!");

    const decoded: TDecodedUser = jwtDecode(session) as TDecodedUser;

    const isUser: Awaited<User | null> = await isUserExistByIdOrProviderId({
      field: "provider_id",
      value: decoded.providerId,
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
