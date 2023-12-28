type GetFutureDateTimeType = {
  futureDateTimeInSecond: number;
};

export default function getFutureDateTime({
  futureDateTimeInSecond,
}: GetFutureDateTimeType): Date {
  const now: Date = new Date();
  const futureDateTime: Date = new Date(
    now.getTime() + futureDateTimeInSecond * 1000
  );

  return futureDateTime;
}
