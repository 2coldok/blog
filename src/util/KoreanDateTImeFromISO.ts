export default function koreanDateTimeFromISO(isoDateTime: string): string {
  const date = new Date(isoDateTime);

  const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Seoul',
  });

  const formattedDateTime = dateFormatter.format(date);
  const finalFormattedDate = formattedDateTime.slice(0, -1);

  return finalFormattedDate;
}