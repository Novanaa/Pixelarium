import compression from "compression";
import { Request, Response } from "express";

export default {
  level: 6,
  threshold: 10 * 1000,
  filter: (req: Request, res: Response) => {
    if (req.headers["x-no-compression"]) return false;

    return compression.filter(req, res);
  },
} satisfies compression.CompressionOptions;
