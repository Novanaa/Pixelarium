import compression from "compression";
import { Request, Response } from "express";

const compressionConfigs: compression.CompressionOptions = {
  level: 6,
  threshold: 10 * 1000,
  filter: (req: Request, res: Response) => {
    if (req.headers["x-no-compression"]) return false;

    return compression.filter(req, res);
  },
};

export default compressionConfigs;
