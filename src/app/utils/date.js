export function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

export function dateList(startDate, withLastDay = false) {
  const dates = [];
  const currentDate = new Date();
  const targetDate = new Date(startDate);

  while (currentDate > targetDate) {
    const month = targetDate.toLocaleString("en-us", { month: "short" });
    const year = targetDate.getFullYear();
    const monthNumber = targetDate.getMonth();
    dates.push({
      name: `${month} ${year}`,
      value: `${year}-${targetDate.toLocaleString("en-us", {
        month: "2-digit",
      })}-${withLastDay ? getLastDayOfMonth(year, monthNumber) : "01"}`,
    });
    targetDate.setMonth(targetDate.getMonth() + 1);
  }

  return dates.reverse();
}
