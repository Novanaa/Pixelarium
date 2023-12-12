import { Response, Request, NextFunction, ErrorRequestHandler } from "express";

/**
 * The function handles request errors and returns a JSON response with an error message if the request
 * is invalid.
 * @param {ErrorRequestHandler} err - The `err` parameter is of type `ErrorRequestHandler`, which is a
 * type representing an error handler function in Express.js. It is used to handle errors that occur
 * during the processing of a request.
 * @param {Request} _ - The underscore (_) is a convention in JavaScript to indicate that a parameter
 * is intentionally unused or ignored. In this case, it is used to indicate that the second parameter
 * (Request) is not being used in the function.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to set the status code,
 * headers, and send the response body.
 * @param {NextFunction} next - The `next` parameter is a function that is used to pass control to the
 * next middleware function in the request-response cycle. It is typically called when the current
 * middleware function has completed its processing and wants to pass control to the next middleware
 * function.
 * @returns either a NextFunction, a Response, or void (undefined).
 */
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
