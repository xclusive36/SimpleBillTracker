import { useState } from "react";
import { Bill } from "../interfaces/interfaces";
import { filterItems } from "../utils/filterArray";
import { BillItem } from "./BillItem";
import { Divider } from "./Divider";
import { NoBills } from "./NoBills";

interface Props {
  billArray: Bill[];
  searchTerm: string;
  billRef: React.RefObject<HTMLIonItemSlidingElement>;
  setBillAsPaid: (bill: Bill) => void;
  updateBill: (bill: Bill) => void;
  deleteBill: (bill: Bill) => void;
  dividerTitle: string;
  noBillsTitle: string;
  color?: string;
}

export const BillList: React.FC<Props> = ({
  billArray,
  searchTerm,
  billRef,
  setBillAsPaid,
  updateBill,
  deleteBill,
  dividerTitle,
  noBillsTitle,
  color,
}) => {
  const [operator, setOperator] = useState("-"); // Sort order state [ascending, descending

  const sortByDate = (array: Bill[]) => {
    // This function sorts an array of bills by the dueDate property. Newest bills first
    return array.sort((a, b) => {
      // Sort the array using the sort function
      if (operator === "-") {
        // If the operator is "-", sort the array in descending order
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(); // Sort the array by the dueDate property
      } else {
        // Sort the array in ascending order
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime(); // Sort the array by the dueDate property
      }
    });
  };

  return (
    <>
      <Divider
        title={dividerTitle}
        operator={operator}
        setOperator={setOperator}
        disabled={billArray.length === 0 || filterItems(searchTerm, billArray).length === 0}
      />
      {billArray.length === 0 ? (
        <NoBills title={noBillsTitle} />
      ) : filterItems(searchTerm, billArray).length === 0 ? (
        <NoBills title="No Search Results " />
      ) : (
        sortByDate(filterItems(searchTerm, billArray)).map((bill, index) => (
          <BillItem
            key={index}
            index={index}
            itemRef={billRef}
            setArchiveState={setBillAsPaid}
            bill={bill}
            billArray={billArray}
            updateBill={updateBill}
            deleteBill={deleteBill}
            color={color}
          />
        ))
      )}
    </>
  );
};
