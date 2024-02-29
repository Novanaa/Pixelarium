import defaultErrorMessege from "@/constant/readonly/defaultErrorMessege";

export default function errorException(messege?: string): Error {
  throw new Error(messege || defaultErrorMessege);
}
