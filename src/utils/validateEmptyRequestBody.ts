import { Request, Response } from "express";
import { httpBadRequestResponse } from "./responses/httpErrorsResponses";
import messege from "../const/readonly/messege";

type ValidateEmptyRequestBodyParams = {
  request: Request;
  response: Response;
};

/**
 * Validates if the request body is empty and returns a response with a bad request error message if it is.
 *
 * @param {ValidateEmptyRequestBodyParams} params - The parameters for the function.
 * @param {Response} params.response - The response object.
 * @param {Request} params.request - The request object.
 *
 * @returns {void|Response} - Returns void if the request body is empty, otherwise returns a response object with a bad request error message.
 */
export default function validateEmptyRequestBody({
  response,
  request,
}: ValidateEmptyRequestBodyParams): void | Response {
  if (!Object.keys(request.body).length)
    return httpBadRequestResponse({
      response,
      errorMessage: messege.emptyFields,
    });
}
