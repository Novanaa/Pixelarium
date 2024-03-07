/**
 * The function `blankPayload` checks if an object has no properties and returns a boolean value.
 * @param {T} body - The `body` parameter in the `blankPayload` function is expected to be an object of
 * type `T`, where `T` is a generic type that extends `object`.
 * @returns The function `blankPayload` is returning a boolean value. It checks if the input object
 * `body` has any keys using `Object.keys(body)`, and then returns `true` if the object is empty (has
 * no keys) or `false` if it has any keys.
 */
export default function blankPayload<T extends object>(body: T) {
  return !Object.keys(body).length;
}
