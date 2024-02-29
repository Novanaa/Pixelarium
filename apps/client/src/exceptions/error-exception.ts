import defaultErrorMessege from "@/constant/readonly/default-error-messege";

export default function errorException(messege?: string): Error {
  throw new Error(messege || defaultErrorMessege);
}
