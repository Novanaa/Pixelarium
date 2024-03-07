/* eslint-disable no-unused-vars */
/* eslint-disable semi */

export interface ErrorResponse {
  TypeError: string;
  messege: string;
  code: number;
  date: string | Date;
  status: "KO";
}

export default interface ErrorResponses {
  badRequest: (messege?: string) => ErrorResponse;
  notFound: (messege?: string) => ErrorResponse;
  unauthorized: (messege?: string) => ErrorResponse;
  unprocessableContent: (messege?: string) => ErrorResponse;
  internalServerError: (messege?: string) => ErrorResponse;
  forbidden: (messege?: string) => ErrorResponse;
}
