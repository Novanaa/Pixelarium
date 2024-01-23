import logger from "../libs/configs/logger";

export type UseFetchParams = {
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

/**
 * Performs a fetch request to the specified URL using the provided method, body, headers, and options.
 *
 * @param method - The HTTP method to use for the request (GET, POST, PATCH, DELETE, PUT).
 * @param url - The URL to send the request to.
 * @param body - The request body data (optional).
 * @param headers - The request headers (optional).
 * @param options - Additional options for the fetch request (optional).
 * @returns An object containing the fetched data
 */
export default async function useFetch<T>({
  method = "GET",
  url,
  body = {},
  headers,
  options,
}: UseFetchParams): Promise<T | null> {
  try {
    const response: Awaited<Response> = await fetch(url, {
      method,
      body: method == "GET" ? null : JSON.stringify(body),
      headers: { Accept: "application/json", ...headers },
      credentials: options?.credentials || "same-origin",
      cache: options?.cache,
    });

    if (!response.ok) throw new Error("Unexpected Errors Occurred");

    // @ts-expect-error error
    const result: Awaited<T> = await response.json();
    return result as T;
  } catch (err) {
    if (err) throw err;
    logger.error(err);
    return null;
  }
}
