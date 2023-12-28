type GetFutureDateTimeType = {
  futureDateTimeInSecond: number;
};

/**
 * GetFutureDateTime is a utility function that returns a new Date object representing a date in the future.
 * It accepts a single argument, an object of type GetFutureDateTimeType.
 * This object has a single property, futureDateTimeInSecond, which represents the number of seconds into the future that the returned Date object should represent.
 *
 * The function starts by creating a new Date object for the current date and time (now).
 * It then creates a new Date object (futureDateTime) for the date and time that is the number of seconds specified by futureDateTimeInSecond, added to the current date and time.
 *
 * Finally, the function returns the futureDateTime object.
 *
 * @param getFutureDateTimeType - The input object, of type GetFutureDateTimeType, containing the number of seconds into the future that the returned Date object should represent.
 * @returns The Date object representing the date and time in the future that corresponds to the specified number of seconds.
 */
export default function getFutureDateTime({
  futureDateTimeInSecond,
}: GetFutureDateTimeType): Date {
  const now: Date = new Date();
  const futureDateTime: Date = new Date(
    now.getTime() + futureDateTimeInSecond * 1000
  );

  return futureDateTime;
}
