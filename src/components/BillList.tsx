import { useState } from "react";
import { Bill } from "../interfaces/interfaces";
import { filterItems } from "../utils/filterArray";
import { BillItem } from "./BillItem";
import { Divider } from "./Divider";
import { NoBills } from "./NoBills";
import { IonButton } from "@ionic/react";
import { strings } from "../language/language";

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

  const [billsExpanded, setBillsExpanded] = useState<boolean>(false); // Create a new state called billsExpanded and set it to false
  const [hideList, setHideList] = useState<boolean>(false); // Create a new state called hideList and set it to false

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

  const toggleHidden = () => {
    // This function toggles the hideList state
    setHideList(!hideList); // Set the hideList state to the opposite of its current value
  }

  return (
    <div className="transition">
      <Divider
        title={dividerTitle}
        operator={operator}
        setOperator={setOperator}
        toggle={toggleHidden}
        hideList={hideList}
        disabled={
          billArray.length <= 1 ||
          filterItems(searchTerm, billArray).length === 0
        }
      />
      {billArray.length === 0 && !hideList ? (
        <NoBills />
      ) : filterItems(searchTerm, billArray).length === 0 && !hideList ? (
        <NoBills />
      ) : billsExpanded && !hideList ? (
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
      ) : (
        !hideList &&
        sortByDate(filterItems(searchTerm, billArray))
          .slice(0, 10)
          .map((bill, index) => (
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
      {billArray && billArray.length > 10 && (
        <div className="ion-text-center">
          <IonButton
            fill="clear"
            size="small"
            onClick={() => {
              setBillsExpanded(!billsExpanded);
            }}>
            {billsExpanded
              ? strings.BILL_COLLAPSE
              : `${strings.BILL_EXPAND} ${billArray.length} ${strings.BILL_BILLS}`}
          </IonButton>
        </div>
      )}
    </div>
  );
};
