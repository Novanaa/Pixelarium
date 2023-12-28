import { Response } from "express";
import { httpFailedResponse } from "./httpApiResponses";
import http from "../../const/readonly/httpStatusCode";
import messege from "../../const/readonly/messege";

/**
 * A type that represents the object passed to the functions
 * responsible for generating error responses.
 */
type ErrorsResponesType = {
  response: Response;
  errorMessage?: string;
};

/**
 * A function that generates a HTTP Bad Request (400) error response.
 *
 * @param response - API Responses
 * @param errorMessage - An object containing the necessary data for generating the error response.
 * @returns A response object representing the HTTP Bad Request error.
 */
export function httpBadRequestResponse({
  response,
  errorMessage,
}: ErrorsResponesType): Response {
  return httpFailedResponse({
    response,
    statusCode: http.StatusBadRequest,
    TypeError: "Bad Request",
    messege: errorMessage || messege.badRequest,
  });
}

/**
 * A function that generates a HTTP Not Found (404) error response.
 *
 * @param response - API Responses
 * @param errorMessage - An object containing the necessary data for generating the error response.
 * @returns A response object representing the HTTP Not Found error.
 */
export function httpNotFoundResponse({
  response,
  errorMessage,
}: ErrorsResponesType): Response {
  return httpFailedResponse({
    response,
    statusCode: http.StatusNotFound,
    TypeError: "Not Found",
    messege: errorMessage || messege.notFound,
  });
}

/**
 * A function that generates a HTTP Unprocessable Content (422) error response.
 *
 * @param response - API Responses
 * @param errorMessage - An object containing the necessary data for generating the error response.
 * @returns A response object representing the HTTP Unprocessable Content error.
 */
export function httpUnprocessableContentResponse({
  response,
  errorMessage,
}: ErrorsResponesType): Response {
  return httpFailedResponse({
    response,
    statusCode: http.StatusUnprocessableEntity,
    TypeError: "Unprocessable Content",
    messege: errorMessage || messege.unprocessable,
  });
}

/**
 * A function that generates a HTTP Unauthorized (401) error response.
 *
 * @param response - API Responses
 * @param errorMessage - An object containing the necessary data for generating the error response.
 * @returns A response object representing the HTTP Unauthorized error.
 */
export function httpUnauthorizedResponse({
  response,
  errorMessage,
}: ErrorsResponesType): Response {
  return httpFailedResponse({
    response,
    statusCode: http.StatusUnauthorized,
    TypeError: "Unauthorized",
    messege: errorMessage || messege.unauth,
  });
}
