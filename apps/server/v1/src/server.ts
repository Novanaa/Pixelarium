import app from "./main";
import logger from "./libs/configs/logger";
import generateTestUser from "./services/generateTestUser";
import { performance } from "perf_hooks";
import { PORT } from "./const/env";
const port: number | string = PORT || 8000;

/* The code block `app.listen(port, () => { ... })` is setting up a listener for incoming HTTP requests
on the specified port. When a request is received, the callback function is executed. */
app.listen(port, async () => {
  const timeStart: number = performance.now();
  await generateTestUser();
  const timeEnd: number = performance.now();
  logger.info(`The server up and running at http://localhost:${port}`);
  logger.info(`The Server Environment: ${process.env.NODE_ENV}`);
  logger.info(`The Test User Has Been Generated in ${timeStart - timeEnd}ms`);
});
