import loggerConfig from "./logger";

/* The code is creating an object named `appConfig` with two properties: `logger` and `trustProxy`. The
`logger` property is assigned the value of the `loggerConfig` variable, which is imported from a
file named "logger". The `trustProxy` property is assigned the value of `1`. Finally, the
`appConfig` object is exported as the default export of the module. */
const appConfig = {
  logger: loggerConfig,
  trustProxy: 1,
};

export default appConfig;
