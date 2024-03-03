import { CLIENT_HOSTNAME } from "@/configs/env";

const corsOptions = {
  credentials: true,
  origin: CLIENT_HOSTNAME!,
};

export default corsOptions;
