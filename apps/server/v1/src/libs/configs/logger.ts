import winston from "winston";

/* The code is creating a logger using the Winston library in TypeScript. */
const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
  format: winston.format.printf((info) => {
    return `${new Date()} - ${info.level.toUpperCase()} : ${info.message}`;
  }),
});

export default logger;
