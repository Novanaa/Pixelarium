import { FastifyRequest } from "fastify";
import moment from "moment";

interface LogParams {
  req: FastifyRequest;
  status: string;
}

/* This TypeScript class, LogMessage, logs a message with request details and status. */
export default class LogMessege {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  /**
   * The function `message` takes `req` and `status` parameters from `LogParams` and returns a formatted
   * log message.
   * @param {LogParams}  - The `messege` function takes in an object with two properties: `req` and
   * `status`. The `req` property is expected to have an `ip` property, and the `status` property is a
   * status code. The function then constructs a log message using these properties along with
   * @returns a log message that includes the IP address of the request, the name of the function, the
   * status of the request, and the timestamp of when the request was made in a formatted string using
   * the moment library.
   */
  messege({ req, status }: LogParams): string {
    return `${req.ip} - (${this.name}) - ${status}: Requested at ${moment(new Date().getTime()).format("LLLL")}`;
  }
}
