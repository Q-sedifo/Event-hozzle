export const generateHoursIso = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const hoursArray = [];

  for (let i = 1; i <= 24; i++) {
    const current = new Date(start.getTime());
    current.setHours(start.getHours() + (i + 2));

    let title;
    if (i === 0) {
      title = "12 AM";
    } else if (i < 12) {
      title = `${i} AM`;
    } else if (i === 12) {
      title = "12 PM";
    } else {
      title = `${i - 12} PM`;
    }

    hoursArray.push({
      title: title,
      key: current.toISOString(),
    });
  }

  return hoursArray;
};
