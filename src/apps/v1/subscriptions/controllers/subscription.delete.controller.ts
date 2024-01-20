import validator from "validator";
import { Request, Response } from "express";
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

export default async function deacitivateUserSubscription(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    const { name } = req.params;
    const { payment_id } = req.query;

    if (!payment_id)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "User Subscription Payment ID Must Be Provided",
      });

    if (!validator.isUUID(String(payment_id)))
      return httpBadRequestResponse({
        response: res,
        errorMessage:
          "The Payment Subscription ID Must Be a Valid Pixelarium Payment ID!",
      });

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

    if (userSubs.payment_id !== payment_id)
      return httpBadRequestResponse({
        response: res,
        errorMessage: "The Payment Subscription ID is Invalid!",
      });

    return res.send("testttt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
