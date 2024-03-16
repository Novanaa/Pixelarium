import { AuthenticationCookies } from "@/interfaces/cookies";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import LogMessege from "@/utils/log";
import serverErrorHandler from "@/utils/server-error-handler";
import { FastifyRequest, FastifyReply } from "fastify";
import invalidCookies from "../utils/invalid-cookies";
import {
  verify,
  VerifyValue,
  generate,
  GenerateToken,
} from "@/utils/jsonwebtoken";
import http from "@/constant/code";
import error from "@/utils/error";
import { User } from "prisma/generated/client";

export interface TokenizerResponseData {
  session: string;
  expires: number;
  status: "OK";
}

/**
 * The `tokenizer` function is an async function that takes in a `req` (FastifyRequest) and `rep` (FastifyReply) parameters.
 * It is responsible for generating a token for a user session and sending it as a response.
 *
 * @param {FastifyRequest} req - The request object containing the cookies.
 * @param {FastifyReply} rep - The reply object used to send the response.
 * @returns {Promise<void>} - A promise that resolves to void.
 *
 * @throws {Error} - If there is an error during token generation or response sending.
 */
export default async function tokenizer(
  req: FastifyRequest,
  rep: FastifyReply
): Promise<void> {
  const log: LogMessege = new LogMessege("Tokenizer");
  try {
    const cookies: AuthenticationCookies = req.cookies as AuthenticationCookies;

    if (invalidCookies(cookies))
      return rep.status(http.StatusUnauthorized).send(error.unauthorized());

    const decode: VerifyValue = verify(
      cookies.session as string
    ) satisfies VerifyValue;

    if (typeof decode == "string")
      return rep.status(http.StatusForbidden).send(error.forbidden());

    const newSession: GenerateToken = generate(decode as User);
    const now: number = new Date().getTime();
    const sessionExpiresTime: number = now + 30 * 60 * 1000;

    const responseData: TokenizerResponseData = {
      session: newSession.accessToken,
      expires: sessionExpiresTime,
      status: "OK",
    };

    return rep.status(http.StatusOk).send(responseData);
  } catch (err) {
    const serverError: Awaited<ErrorResponse> = await serverErrorHandler({
      err: err as Error,
      messege: log.messege({ ip: req.ip, status: "Internal Server Error" }),
    });

    return rep.status(serverError.code).send(serverError);
  }
}
