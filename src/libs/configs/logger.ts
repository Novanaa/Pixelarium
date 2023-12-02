import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
  format: winston.format.printf((info) => {
    return `${new Date()} - ${info.level.toUpperCase()} : ${info.message}`;
  }),
});

export default logger;
