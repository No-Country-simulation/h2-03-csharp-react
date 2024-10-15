const today: Date = new Date();
const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };

const dateFormat = (date: Date) => {
  if (date.toDateString() === today.toDateString()) {
    return "Hoy";
  }
  return date.toLocaleDateString("es-ES", options);
};

const dates: string[] = [];
for (let i = 0; i < 6; i++) {
  const newDate: Date = new Date(today);
  newDate.setDate(today.getDate() + i);

  dates.push(dateFormat(newDate));
}

export default dates;
