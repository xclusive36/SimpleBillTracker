import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { Bill } from "../interfaces/interfaces";
import { updateBill } from "../utils/setBill";
import { strings } from "../language/language";

interface Props {
  itemRef: React.RefObject<HTMLIonItemSlidingElement>;
  bill: Bill;
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void;
  setSortedDataToState: (arg0: Bill[]) => void;
}

export const UpdateModal: React.FC<Props> = ({
  itemRef,
  bill,
  presentToast,
  setSortedDataToState,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const billName = useRef<HTMLIonInputElement>(null);
  const billCategory = useRef<HTMLIonInputElement>(null);
  const billOwed = useRef<HTMLIonInputElement>(null);
  const billDate = useRef<HTMLIonDatetimeElement>(null);
  const billRepeat = useRef<HTMLIonSelectElement>(null);

  function confirm() {
    let date = new Date();
    if (billDate.current?.value)
      date = new Date(billDate.current?.value as string); // returns a string as "YYYY-MM-DDTHH:MM:SS.SSSZ"
    let formattedDate = "";

    if ((billName.current?.value as string) === "") {
      presentToast("bottom", strings.REQUIRED_NAME);
      return;
    }

    formattedDate = date.toISOString().split("T")[0]; // remove everything after the day to get the date in the format "YYYY-MM-DD"

    const billObj: Bill = {
      id: bill.id,
      name: (billName.current?.value as string).trim() || "",
      type: (billCategory.current?.value as string).trim() || "",
      amount: (billOwed.current?.value as number) || 0,
      dueDate: formattedDate,
      repeat: (billRepeat.current?.value as string) || "Never",
      paid: bill.paid,
    };

    updateBill(billObj, presentToast, setSortedDataToState);
    itemRef.current?.closeOpened();
    modal.current?.dismiss();
  }

  return (
    <IonModal ref={modal} trigger={`update-modal-${bill.id}`}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>{strings.ALERT_HEADER}</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          labelPlacement="stacked"
          ref={billName}
          type="text"
          placeholder={strings.PLACEHOLDER_NAME}
          value={bill.name}
          className="ion-margin-top"
          mode="md"
          fill="outline">
          <div slot="label">
            {strings.PLACEHOLDER_NAME}{" "}
            <IonText color="danger">({strings.INPUT_REQUIRED})</IonText>
          </div>
        </IonInput>
        <IonInput
          labelPlacement="stacked"
          label={strings.PLACEHOLDER_CATEGORY}
          ref={billCategory}
          type="text"
          placeholder={strings.PLACEHOLDER_CATEGORY}
          value={bill.type}
          className="ion-margin-top"
          mode="md"
          fill="outline"></IonInput>
        <IonInput
          labelPlacement="stacked"
          label={strings.PLACEHOLDER_AMOUNT}
          ref={billOwed}
          type="number"
          inputmode="decimal"
          placeholder="0"
          min="0"
          value={bill.amount}
          className="ion-margin-top ion-margin-end"
          mode="md"
          fill="outline"></IonInput>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "var(--ion-color-light, #f4f5f8)",
            margin: "1rem 0",
          }}>
          <IonDatetime
            className="ion-margin"
            ref={billDate}
            presentation="date"></IonDatetime>
        </div>
        <IonItem>
          <IonSelect
            ref={billRepeat}
            label={`${strings.BILL_REPEATS}:`}
            placeholder="Never">
            <IonSelectOption value="Never">
              {strings.BILL_REPEATS_NEVER}
            </IonSelectOption>
            <IonSelectOption value="Week">
              {strings.BILL_REPEATS_WEEK}
            </IonSelectOption>
            <IonSelectOption value="2Week">
              {strings.BILL_REPEATS_2WEEK}
            </IonSelectOption>
            <IonSelectOption value="4Week">
              {strings.BILL_REPEATS_4WEEK}
            </IonSelectOption>
            <IonSelectOption value="Month">
              {strings.BILL_REPEATS_MONTH}
            </IonSelectOption>
            <IonSelectOption value="2Month">
              {strings.BILL_REPEATS_2MONTH}
            </IonSelectOption>
            <IonSelectOption value="3Month">
              {strings.BILL_REPEATS_3MONTH}
            </IonSelectOption>
            <IonSelectOption value="4Month">
              {strings.BILL_REPEATS_4MONTH}
            </IonSelectOption>
            <IonSelectOption value="6Month">
              {strings.BILL_REPEATS_6MONTH}
            </IonSelectOption>
            <IonSelectOption value="Year">
              {strings.BILL_REPEATS_YEARLY}
            </IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonModal>
  );
};
