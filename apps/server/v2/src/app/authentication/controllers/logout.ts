import http from "@/constant/code";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import LogMessege from "@/utils/log";
import serverErrorHandler from "@/utils/server-error-handler";
import { FastifyReply, FastifyRequest } from "fastify";

export default async function logout(
  req: FastifyRequest,
  rep: FastifyReply
): Promise<void> {
  const log: LogMessege = new LogMessege("Logout Authentication");
  try {
    return rep.status(http.StatusOk).send("testt");
  } catch (err) {
    const serverError: Awaited<ErrorResponse> = await serverErrorHandler({
      err: err as Error,
      messege: log.messege({ ip: req.ip, status: "Internal Server Error" }),
    });

    return rep.status(serverError.code).send(serverError);
  }
}
