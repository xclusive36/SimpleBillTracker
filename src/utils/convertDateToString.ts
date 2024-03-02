export const convertDateToString = (date: string) => {
  // convert the data.dateDue string from yyyy-mm-dd to mm/dd/yyyy
  const dateDueAsArray = date.split("-");
  const dueMonth = dateDueAsArray[1];
  const dueDay = dateDueAsArray[2];
  const dueYear = dateDueAsArray[0];
  const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`;

  const dateObj = new Date(dueDateString);

  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const dateString = `${month} ${day}, ${year}`;
  // const dueDate = new Date(dueDateString); // create a new date object from the dateDue string to compare with today's date
  return dateString;
  // return date;
  // return dueDate;
};
