import logger from "../libs/configs/logger";

type UseFetchParams = {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  body?: unknown;
  headers?: Headers | HeadersInit;
  options?: UseFetchOptions;
};

type UseFetchOptions = {
  credentials?: RequestCredentials;
  cache: RequestCache;
};

type UseFetchReturnType = {
  datas: unknown;
  errors: Error | undefined;
};

/**
 * Performs a fetch request to the specified URL using the provided method, body, headers, and options.
 *
 * @param method - The HTTP method to use for the request (GET, POST, PATCH, DELETE, PUT).
 * @param url - The URL to send the request to.
 * @param body - The request body data (optional).
 * @param headers - The request headers (optional).
 * @param options - Additional options for the fetch request (optional).
 * @returns An object containing the fetched data and any errors encountered.
 */
export default function useFetch<T>({
  method,
  url,
  body = {},
  headers,
  options,
}: UseFetchParams): UseFetchReturnType {
  let datas, errors;

  const retriveData = async () => {
    try {
      const response: Awaited<Response> = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
        credentials: options?.credentials || "same-origin",
        cache: options?.cache,
      });
      const result: Awaited<T> = await response.json();
      datas = result;
    } catch (err) {
      logger.error(err);
      errors = err;
    }
  };

  retriveData();

  return { datas, errors };
}
