import logger from "../libs/configs/logger";

/**
 * The function `useFetch` is an asynchronous function that makes a request to a specified URL using
 * the specified HTTP method and authorization header, and returns the response as a JSON object of
 * type T, or null if there is an error.
 * @param {string} url - The `url` parameter is a string that represents the URL of the API endpoint
 * you want to fetch data from.
 * @param {string} [method=GET] - The method parameter is used to specify the HTTP method to be used in
 * the request. It is optional and defaults to "GET" if not provided.
 * @param {string} [auth] - The `auth` parameter is used to specify the authorization token that should
 * be included in the request headers. It is an optional parameter and its default value is an empty
 * string. If you want to include an authorization token in the request, you can pass it as a string to
 * the `auth` parameter
 * @returns a Promise that resolves to a value of type T or null.
 */
export default async function useFetch<T>(
  url: string,
  method: string = "GET",
  auth: string = ""
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method,
      headers: { Accept: "application/json", Authorization: auth },
    });
    const result: Awaited<T> = await response.json();

    return result;
  } catch (err) {
    logger.error(err);
    return null;
  }
}
