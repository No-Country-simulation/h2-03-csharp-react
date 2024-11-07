export const compareTimes = (timeA: string, timeB: string): number => {
  const [hoursA, minutesA] = timeA.split(":").map(Number);
  const [hoursB, minutesB] = timeB.split(":").map(Number);

  if (hoursA !== hoursB) {
    return hoursA - hoursB;
  }
  return minutesA - minutesB;
};
