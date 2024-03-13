import logger from "@/libs/logger";
import prisma from "@/libs/prisma";
import error from "./error";
import { ErrorResponse } from "./interfaces/error-response";

interface ServerErrorHandlerParams {
  err: Error;
  messege: string;
}

/**
 * Handles server errors and returns an ErrorResponse object.
 *
 * @param {ServerErrorHandlerParams} params - The parameters for the server error handler.
 * @param {Error} params.err - The error object.
 * @param {string} params.messege - The error message.
 * @returns {Promise<ErrorResponse>} - A promise that resolves to an ErrorResponse object.
 */
export default async function serverErrorHandler({
  err,
  messege,
}: ServerErrorHandlerParams): Promise<ErrorResponse> {
  await prisma.$disconnect();
  logger.error(err);
  logger.info(messege);

  return error.internalServerError();
}
