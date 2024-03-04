import { Logger, pino } from "pino";
import loggerConfig from "../configs/logger";

/* This line of code is creating a logger instance using the `pino` library with the configuration
provided in `loggerConfig`. The `const logger: Logger` part declares a constant variable named
`logger` with the type `Logger`, which is the type provided by the `pino` library for loggers. The
`pino(loggerConfig)` part initializes the logger instance with the configuration specified in
`loggerConfig`. */
const logger: Logger = pino(loggerConfig);

export default logger;
