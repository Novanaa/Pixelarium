/**
 * The function `prettifyPayloadError` takes a message as input and returns a formatted error message
 * with "Invalid Payload Pattern" prefix.
 * @param {string} messege - The `messege` parameter in the `prettifyPayloadError` function is a string
 * that represents the error message or description related to an invalid payload pattern.
 * @returns The function `prettifyPayloadError` returns a string that starts with "(Invalid Payload
 * Pattern) - " followed by the input `message` with any double quotes removed.
 */
export default function prettifyPayloadError(messege: string): string {
  return `(Invalid Payload Pattern) - ${messege.replace(/"/g, "")}`;
}
