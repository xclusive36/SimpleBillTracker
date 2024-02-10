import {
  IonCardTitle,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonText,
  useIonAlert,
} from "@ionic/react";
import { ReactNode } from "react";
import { Bill } from "../interfaces/interfaces";
import { convertDateToString } from "../utils/convertDateToString";

interface Props {
  index: number;
  itemRef: React.RefObject<HTMLIonItemSlidingElement>;
  setArchiveState: (bill: Bill) => void;
  bill: Bill;
  billArray: Bill[];
  updateBill: (bill: Bill) => void;
  deleteBill: (bill: Bill) => void;
}

export const BillItem: React.FC<Props> = ({
  index,
  itemRef,
  setArchiveState,
  bill,
  billArray,
  updateBill,
  deleteBill,
}) => {
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook

  const presentAlertUpdate = (bill: Bill) => {
    presentAlert({
      header: "Update Bill",
      inputs: [
        {
          placeholder: "Bill Name",
          id: "name",
          value: bill.name,
        },
        {
          placeholder: "Bill Category",
          id: "type",
          value: bill.type,
        },
        {
          type: "number",
          placeholder: "Minimum amount owed",
          min: 1,
          id: "amount",
          value: bill.amount,
        },
        {
          type: "date",
          id: "dueDate",
          value: bill.dueDate,
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "OK",
          role: "confirm",
          handler: (data) => {
            const billObj: Bill = {
              id: bill.id,
              name: data[0],
              type: data[1],
              amount: data[2],
              dueDate: data[3],
              paid: bill.paid,
            };
            updateBill(billObj);
          },
        },
      ],
    });
  };

  return (
    <IonItemSliding ref={itemRef}>
      <IonItemOptions
        side="start"
        onIonSwipe={() => {
          setArchiveState(bill);
          itemRef.current?.closeOpened();
        }}
      >
        <IonItemOption
          color="success"
          onClick={() => {
            setArchiveState(bill);
            itemRef.current?.closeOpened();
          }}
        >
          Archive
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines={index === billArray.length - 1 ? "none" : "inset"}>
        <IonLabel>
          <IonCardTitle style={{ fontSize: "1.25rem" }}>
            {bill.name}
          </IonCardTitle>
          <small>{bill.type}</small>
        </IonLabel>
        <IonText slot="end">
          <IonCardTitle className="ion-text-right" style={{ fontSize: "1rem" }}>
            ${bill.amount}
          </IonCardTitle>
          <small>{convertDateToString(bill.dueDate)}</small>
        </IonText>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption
          color="secondary"
          onClick={() => presentAlertUpdate(bill)}
        >
          Update
        </IonItemOption>
        <IonItemOption color="danger" onClick={() => deleteBill(bill)}>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
