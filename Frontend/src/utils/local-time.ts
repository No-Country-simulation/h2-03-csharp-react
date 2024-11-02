export const convertUtcToLocalTime = (utcTime: string) => {

  const [hours, minutes] = utcTime.split(":").map(Number);
  const utcDate = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      hours,
      minutes
    )
  );

  const localHours = utcDate.getHours();
  const localMinutes = utcDate.getMinutes();

  const formattedLocalTime =
    localHours.toString().padStart(2, "0") +
    ":" +
    localMinutes.toString().padStart(2, "0");
  return formattedLocalTime;
};
