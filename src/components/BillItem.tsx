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
import { hapticsImpactLight } from "../capacitor/haptics";
import { strings } from "../language/language";
import { deleteBill, updateBill } from "../utils/setBill";

interface Props {
  index: number;
  itemRef: React.RefObject<HTMLIonItemSlidingElement>;
  setArchiveState: (bill: Bill) => void;
  bill: Bill;
  billArray: Bill[];
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void;
  setSortedDataToState: (arg0: Bill[]) => void;
  color?: string;
  archive?: boolean;
}

export const BillItem: React.FC<Props> = ({
  index,
  itemRef,
  setArchiveState,
  bill,
  billArray,
  presentToast,
  setSortedDataToState,
  color,
  archive = true,
}) => {
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook

  const presentAlertUpdate = (bill: Bill) => {
    presentAlert({
      header: strings.ALERT_HEADER,
      inputs: [
        {
          placeholder: strings.ALERT_PLACEHOLDER_1,
          id: "name",
          value: bill.name,
        },
        {
          placeholder: strings.ALERT_PLACEHOLDER_2,
          id: "type",
          value: bill.type,
        },
        {
          type: "number",
          placeholder: strings.ALERT_PLACEHOLDER_3,
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
          text: strings.ALERT_CANCEL,
          role: "cancel",
          handler: () => hapticsImpactLight(), // Trigger a light haptic feedback
        },
        {
          text: strings.ALERT_OKAY,
          role: "confirm",
          handler: (data) => {
            hapticsImpactLight(); // Trigger a light haptic feedback
            const billObj: Bill = {
              id: bill.id,
              name: data[0],
              type: data[1],
              amount: data[2],
              dueDate: data[3],
              paid: bill.paid,
            };
            updateBill(billObj, presentToast, setSortedDataToState).then(() =>
              itemRef.current?.closeOpened()
            );
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
          hapticsImpactLight(); // Trigger a light haptic feedback
          setArchiveState(bill);
          itemRef.current?.closeOpened();
        }}
      >
        <IonItemOption
          color="success"
          onClick={() => {
            hapticsImpactLight(); // Trigger a light haptic feedback
            setArchiveState(bill);
            itemRef.current?.closeOpened();
          }}
        >
          {archive ? strings.ARCHIVE : strings.UNARCHIVE}
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines={index === billArray.length - 1 ? "none" : "inset"}>
        <IonLabel>
          <IonCardTitle style={{ fontSize: "1rem" }}>{bill.name}</IonCardTitle>
          <small>{bill.type}</small>
        </IonLabel>
        <IonText slot="end">
          <IonCardTitle
            className="ion-text-right"
            style={{ fontSize: "1rem" }}
            color={color || "primary"}
          >
            ${Number(bill.amount)}
          </IonCardTitle>
          <small>{convertDateToString(bill.dueDate)}</small>
        </IonText>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption
          color="secondary"
          onClick={() => {
            hapticsImpactLight(); // Trigger a light haptic feedback
            presentAlertUpdate(bill);
          }}
        >
          {strings.UPDATE}
        </IonItemOption>
        <IonItemOption
          color="danger"
          onClick={() => {
            hapticsImpactLight(); // Trigger a light haptic feedback
            deleteBill(
              bill,
              presentAlert,
              presentToast,
              setSortedDataToState
            ).then(() => itemRef.current?.closeOpened());
          }}
        >
          {strings.DELETE}
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
