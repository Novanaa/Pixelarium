import { PinoLoggerOptions } from "fastify/types/logger";

const loggerConfig: PinoLoggerOptions = {
  transport: {
    target: "pino-pretty",
    options: {
      ignore: "pid,hostname,res,reqId,responseTime,req,test",
      timestamp: "SYS:yyyy-mm-dd HH:MM:ss.l",
    },
  },
};

export default loggerConfig;
