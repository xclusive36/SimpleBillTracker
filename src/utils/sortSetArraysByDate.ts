import { Bill } from "../interfaces/interfaces";

export const sortSetArraysByDate = (bills: Bill[]) => {
  // Function sorts the bills array by due date or paid status. Must be either today, upcoming, past due or paid.
  // Sort the bills and assign them to the appropriate array
  // If the bill is paid, it must be added to the paidBills array otherwise it may be added to any of the other arrays
  // If the bill is due today, it must be added to the todaysBills array
  // If the bill is due in the future, it must be added to the upcomingBills array
  // If the bill is past due, it must be added to the pastDueBills array

  // Assign new empty arrays for each category
  const todaysArray: Bill[] = []; // create an array for bills due today
  const upcomingArray: Bill[] = []; // create an array for bills due in the future
  const pastDueArray: Bill[] = []; // create an array for bills that are past due
  const paidArray: Bill[] = []; // create an array for bills that have been paid

  // Assign variables to today's date
  const today = new Date(); // get month, day, year from today
  const todayMonth = today.getMonth() + 1; // getMonth() returns 0-11 so add 1
  const todayDay = today.getDate(); // get day of the month from today
  const todayYear = today.getFullYear(); // get year from today

  bills.forEach((bill) => {
    // For each bill in the bills array, convert the bill.dateDue string from yyyy-mm-dd to mm-dd-yyyy
    const dateDueAsArray = bill.dueDate.split("-"); // split the date string into an array

    // once the date is split into an array, assign the month, day and year to variables
    const dueMonth = dateDueAsArray[1]; // get month from dateDueAsArray
    const dueDay = dateDueAsArray[2]; // get day from dateDueAsArray
    const dueYear = dateDueAsArray[0]; // get year from dateDueAsArray
    const dueDateString = `${dueMonth}-${dueDay}-${dueYear}`; // convert dateDueAsArray to mm-dd-yyyy string

    const dueDate = new Date(dueDateString); // Now create a new date object from the dateDue string

    // If the bill is paid, add it to the paidArray and return
    if (bill.paid) {
      paidArray.push(bill);
      return;
    }

    // If bill is not paid, compare the due date object with today's date object and assign the bill to the appropriate array
    dueDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0) // check if the due date is less than today with time set to 0
      ? pastDueArray.push(bill) // if true, add the bill to the pastDueBills array
      : dueDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0) // otherwise check if the due date is today with time set to 0
      ? todaysArray.push(bill) // if true, add the bill to the todaysBills array
      : upcomingArray.push(bill); // otherwise, add the bill to the upcomingBills array
  });

  return {
    todaysArray,
    upcomingArray,
    pastDueArray,
    paidArray,
  }; // return the new object with the updated arrays
};
