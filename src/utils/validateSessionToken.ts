import { Response } from "express";
import { ErrorsRespones } from "./Response";

/**
 * Function to validate the session token.
 *
 * @param {object} options - The options object containing session, response, and except parameters.
 * @param {string} options.session - The session token to be validated.
 * @param {Response} options.response - The response object from the Express application.
 * @param {ErrorsRespones} options.except - The error response handler.
 * @returns {void | Response} - If the session token is not provided, an error response will be sent.
 */
export default function validateSessionToken({
  session,
  response,
  except,
}: {
  session: string;
  response: Response;
  except: ErrorsRespones;
}): void | Response {
  if (!session)
    return except.unauth(response, "This operation required a session token!");
}
