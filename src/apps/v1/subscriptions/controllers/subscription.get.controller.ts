import { Request, Response } from "express";
import pricesList from "../../../../../resources/prices-list.json";
import logger from "../../../../libs/configs/logger";
import { httpBadRequestResponse } from "../../../../utils/responses/httpErrorsResponses";
import client from "../../../../libs/configs/prisma";

export function prices(_: Request, res: Response): Response {
  return res.status(200).json(pricesList);
}

export async function userSubscriptionStatus(
  req: Request,
  res: Response
): Promise<void | Response> {
  try {
    res.send("testttt");
  } catch (err) {
    logger.error(err);
    return httpBadRequestResponse({ response: res });
  } finally {
    await client.$disconnect();
  }
}
