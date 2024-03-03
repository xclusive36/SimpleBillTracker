import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { strings } from "../language/language";
import { AddBill } from "./AddBill";
import { Bill } from "../interfaces/interfaces";

interface Props {
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void;
  setSortedDataToState: (arg0: Bill[]) => void;
}

export const Header: React.FC<Props> = ({
  presentToast,
  setSortedDataToState,
}) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{strings.TITLE}</IonTitle>
        <IonButtons slot="end">
          <AddBill
            presentToast={presentToast}
            setSortedDataToState={setSortedDataToState}
          />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
