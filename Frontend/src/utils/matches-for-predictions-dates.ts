const today: Date = new Date();
const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };

const dateFormat = (dateString: string) => {
  const [day, month, year] = dateString.split("/");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (date.toDateString() === today.toDateString()) {
    return "Hoy";
  }
  return date.toLocaleDateString("es-ES", options);
};

const generateDates = () => {
  const dates: string[] = [];
  for (let i = 0; i <= 3; i++) {
    const newDate: Date = new Date(today);
    newDate.setDate(today.getDate() + i);

    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();

    dates.push(`${day}/${month}/${year}`);
  }
  return dates;
};

export default { dateFormat, generateDates };