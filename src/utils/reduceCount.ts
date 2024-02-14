import { Bill } from "../interfaces/interfaces";

export const reduceCount = (array: Bill[]) => {
  if (!array || !array.length) {
    return 0;
  }

  // create an array of amounts and convert them to numbers
  const amounts = array.map((bill) => Number(bill.amount));

  return amounts
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
    .toFixed(2);
};
