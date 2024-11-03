interface ConvertDateTime {
  adjustedDate: string;
  adjustedTime: string;
}

export const convertUtcToLocalDateTime = (
  utcDate: string,
  utcTime: string
): ConvertDateTime => {
  const [day, month, year] = utcDate.split("/");
  const formattedDate = `${year}-${month}-${day}`;

  const utcDateTime = new Date(`${formattedDate}T${utcTime}:00Z`);

  const localDateTime = new Date(utcDateTime);

  const localDay = localDateTime.getDate().toString().padStart(2, "0");
  const localMonth = (localDateTime.getMonth() + 1).toString().padStart(2, "0");
  const localYear = localDateTime.getFullYear();
  const localHours = localDateTime.getHours().toString().padStart(2, "0");
  const localMinutes = localDateTime.getMinutes().toString().padStart(2, "0");

  const adjustedDate = `${localDay}/${localMonth}/${localYear}`;
  const adjustedTime = `${localHours}:${localMinutes}`;

  return { adjustedDate, adjustedTime };
};
