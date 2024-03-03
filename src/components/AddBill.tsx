import { IonButton, IonIcon, useIonAlert } from "@ionic/react";
import { hapticsImpactLight } from "../capacitor/haptics";
import { Bill } from "../interfaces/interfaces";
import { addBill } from "../utils/setBill";
import { addOutline } from "ionicons/icons";

interface Props {
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void;
  setSortedDataToState: (arg0: Bill[]) => void;
}

export const AddBill: React.FC<Props> = ({
  presentToast,
  setSortedDataToState,
}) => {
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook

  return (
    <IonButton
      onClick={() => {
        hapticsImpactLight(); // Trigger a light haptic feedback
        presentAlert({
          // Call the presentAlert function to present an alert
          header: "Add a Bill",
          inputs: [
            {
              placeholder: "Bill Name",
              id: "name",
            },
            {
              placeholder: "Bill Category",
              id: "type",
            },
            {
              type: "number",
              placeholder: "Minimum amount owed",
              min: 1,
              id: "amount",
            },
            {
              type: "date",
              id: "dueDate",
            },
          ],
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: () => hapticsImpactLight(), // Trigger a light haptic feedback
            },
            {
              text: "OK",
              role: "confirm",
              handler: (data) => {
                hapticsImpactLight(); // Trigger a light haptic feedback
                const bill: Bill = {
                  id: Math.random().toString(36).substr(2, 9),
                  name: data[0],
                  type: data[1],
                  amount: data[2],
                  dueDate: data[3],
                  paid: false,
                };
                addBill(bill, presentToast, setSortedDataToState);
              },
            },
          ],
        });
      }}>
      <IonIcon icon={addOutline} />
    </IonButton>
  );
};
