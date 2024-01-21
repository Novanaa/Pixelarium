/**
 * Returns the rounded number to the nearest thousand.
 *
 * @param value - The number to be rounded.
 * @returns The rounded number to the nearest thousand.
 */
export default function getRoundedNumber(value: number): number {
  return Math.round(value / 1000) * 1000;
}
