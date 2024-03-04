import {
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { strings } from "../language/language";
import { hapticsImpactLight } from "../capacitor/haptics";

export const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{strings.TITLE}</IonTitle>
        <IonButtons slot="end">
          <IonButton
            strong={true}
            onClick={() => {
              hapticsImpactLight(); // Trigger a light haptic feedback
            }}
            id="open-modal"
            expand="block">
            {strings.ADD_BILL}&nbsp;
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
