import { Response, Request, NextFunction, ErrorRequestHandler } from "express";

export default function requestErrorValidation(
  err: ErrorRequestHandler,
  _: Request,
  res: Response,
  next: NextFunction
): NextFunction | Response | void {
  if (err instanceof SyntaxError)
    return res.status(400).json({
      TypeError: "SyntaxError",
      messege: "The request you made is invalid.",
      status: "KO",
    });

  return next();
}
