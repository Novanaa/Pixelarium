import { Response } from "express";
import { ClientKey } from "../../../../../generated/client";

/**
 * Sends a response back to the client containing the user's client ID, client secret, and status.
 * @param {object} param - An object containing the response, clientId, and clientSecret.
 * @param {Response} param.response - The response object to be sent back to the client.
 * @param {string} param.clientId - The user's client ID.
 * @param {string} param.clientSecret - The user's client secret.
 */
export default function sendUserClientKeysResponse({
  response,
  clientKeys,
}: {
  response: Response;
  clientKeys: ClientKey | null;
}): void {
  // Here we define a function called 'sendUserClientKeysResponse'.
  // This function takes an object as an argument.
  // The object has three properties: response, clientId, and clientSecret.
  // We are using the shorthand syntax to define properties in the function parameter.

  // We then send a response back to the client.
  // We set the status code to 200, which means "OK".
  // We return a JSON object containing the clientId, clientSecret, and status.
  response.status(200).json({
    client_id: clientKeys?.client_id,
    client_secret: clientKeys?.client_secret,
    status: "OK",
  });
}

// In the comments above, we provide clear and concise explanations for each part of the code.
// This is important for good documentation and communication, especially in a professional setting.
