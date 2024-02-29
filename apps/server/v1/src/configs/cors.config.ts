import { CorsOptions } from "cors";
import { CLIENT_FRONTEND_URL } from "../const/env";

const corsOptions: CorsOptions = {
  origin: CLIENT_FRONTEND_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

export default corsOptions;
