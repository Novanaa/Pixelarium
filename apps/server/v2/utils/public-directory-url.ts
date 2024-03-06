import { FastifyRequest } from "fastify";

/**
 * The function `getPublicAvatarDirectoryUrl` returns the URL for the public avatar directory based on
 * the request protocol and hostname.
 * @param {FastifyRequest} req - The `req` parameter in the `getPublicAvatarDirectoryUrl` function is
 * of type `FastifyRequest`, which is likely an object representing an HTTP request in a Fastify
 * application. It contains information about the incoming request, such as the protocol used
 * (`req.protocol`) and the hostname (`req
 * @returns The function `getPublicAvatarDirectoryUrl` returns a string that represents the URL for the
 * public avatar directory based on the protocol and hostname provided in the Fastify request object.
 */
export function getPublicAvatarDirectoryUrl(req: FastifyRequest): string {
  return `${req.protocol}://${req.hostname}/avatar`;
}

interface GetPublicGalleryDirectoryUrlParams {
  req: FastifyRequest;
  name: string;
}

/**
 * The function `getPublicGalleryDirectoryUrl` returns the URL for a public gallery directory based on
 * the request protocol, hostname, and gallery name.
 * @param {GetPublicGalleryDirectoryUrlParams}  - The `GetPublicGalleryDirectoryUrlParams` object
 * contains two properties:
 * @returns A string representing the URL of a public gallery directory.
 */
export function getPublicGalleryDirectoryUrl({
  req,
  name,
}: GetPublicGalleryDirectoryUrlParams): string {
  return `${req.protocol}://${req.hostname}/galleries/${name}`;
}
