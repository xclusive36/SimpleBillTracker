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
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void;
  setSortedDataToState: (arg0: Bill[]) => void;
  setBillAsPaid: (bill: Bill) => void;
  dividerTitle: string;
  color?: string;
  archive?: boolean;
}

export const BillList: React.FC<Props> = ({
  billArray,
  searchTerm,
  billRef,
  presentToast,
  setSortedDataToState,
  setBillAsPaid,
  dividerTitle,
  color,
  archive,
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
        disabled={
          billArray.length <= 1 ||
          filterItems(searchTerm, billArray).length === 0
        }
      />
      {billArray.length === 0 ? (
        <NoBills />
      ) : filterItems(searchTerm, billArray).length === 0 ? (
        <NoBills />
      ) : (
        sortByDate(filterItems(searchTerm, billArray)).map((bill, index) => (
          <BillItem
            key={index}
            index={index}
            itemRef={billRef}
            setArchiveState={setBillAsPaid}
            bill={bill}
            billArray={billArray}
            presentToast={presentToast}
            setSortedDataToState={setSortedDataToState}
            color={color}
            archive={archive}
          />
        ))
      )}
    </>
  );
};
