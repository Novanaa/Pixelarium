import http from "@/constant/code";
import { AuthenticationCookies } from "@/interfaces/cookies";
import error from "@/utils/error";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import LogMessege from "@/utils/log";
import serverErrorHandler from "@/utils/server-error-handler";
import { FastifyReply, FastifyRequest } from "fastify";
import { verify, type VerifyValue } from "@/utils/jsonwebtoken";

interface LogoutResponseData {
  status: "OK";
  messege: string;
}

export default async function logout(
  req: FastifyRequest,
  rep: FastifyReply
): Promise<void> {
  const log: LogMessege = new LogMessege("Logout Authentication");
  try {
    const cookies: AuthenticationCookies = req.cookies as AuthenticationCookies;

    if (!Object.keys(cookies).length || !cookies.session)
      return rep.status(http.StatusUnauthorized).send(error.unauthorized());

    const decoded: VerifyValue = verify(cookies.session);

    if (typeof decoded == "string")
      return rep.status(http.StatusForbidden).send(error.forbidden());

    Object.keys(cookies).map((cookie) => rep.clearCookie(cookie));

    const responseData: LogoutResponseData = {
      messege:
        "Logout successful. Thank you for using our service. Have a great day!",
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
