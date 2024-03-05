import { RegisterOptions } from "fastify";

/**
 * The function `prefix` takes a string input and returns an object with the input string as a property
 * value.
 * @param {string} name - The `name` parameter in the `prefix` function is a string that represents the
 * prefix value to be set in the returned object.
 * @returns The function `prefix` is being exported as the default export. It takes a parameter `name`
 * of type string and returns an object with a property `prefix` set to the value of the `name`
 * parameter. The return type is specified as `RegisterOptions`.
 */
export default function prefix(name: string) {
  return { prefix: "/" + name } as RegisterOptions;
}
