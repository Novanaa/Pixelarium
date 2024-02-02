export default function errorException(messege?: string): Error {
  const defaultErrorMessege: string =
    "An unexpected error has occurred, preventing the successful execution of the requested operation. Please try again later or contact our support team for further assistance.";
  throw new Error(messege || defaultErrorMessege);
}
