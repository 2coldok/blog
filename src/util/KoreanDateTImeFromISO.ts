export default function koreanDateTimeFromISO(isoDateTime: string): string {
  const date = new Date(isoDateTime);

  const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  });

  const formattedDateTime = dateFormatter.format(date);

  return formattedDateTime;
}