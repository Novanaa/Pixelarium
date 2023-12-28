import { Response } from "express";

/**
 * Defines the shape of the httpFailedResponse function argument
 */
type HttpFailedResponseType = {
  statusCode: number;
  response: Response;
  messege?: string;
  TypeError: string;
};

/**
 * A utility function that generates an HTTP response with the given status code and error details.
 *
 * @param options - An object containing the status code, response object, error message, and error type.
 * @returns The updated response object with the error message and status.
 */
export function httpFailedResponse({
  response,
  messege,
  statusCode,
  TypeError,
}: HttpFailedResponseType): Response {
  // Return the response object with the given status code and JSON error details
  return response.status(statusCode).json({
    TypeError,
    messege,
    status: "KO",
  });
}
