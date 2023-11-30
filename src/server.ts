import app from "./main";
import logger from "./libs/configs/logger";
import { PORT } from "./const/env";
const port: number | string = PORT || 8000;

// Application Listener
app.listen(port, () => {
  logger.info(`The server up and running at http://localhost:${port}`);
  logger.info(`The Development Environment: ${process.env.NODE_ENV}`);
});
