import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import { hapticsImpactLight } from "../capacitor/haptics";
import { menuController } from "@ionic/core/components";
import {
  closeOutline,
  fileTrayFullOutline,
  shieldCheckmarkOutline,
  sparklesOutline,
} from "ionicons/icons";

interface Props {
  store: any;
}

export const Sidemenu: React.FC<Props> = ({ store }) => {
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook
  const [present] = useIonToast(); // Create a new toast using the useIonToast hook

  const presentToast = (
    // Create a new function called presentToast
    position: "top" | "middle" | "bottom", // Create a new parameter called position and set it to a string
    message: string // Create a new parameter called message and set it to a string
  ) => {
    present({
      // Call the present function from the useIonToast hook
      message: message, // Set the message of the toast to the message parameter
      duration: 1500, // Set the duration of the toast to 1500ms
      position: position, // Set the position of the toast to the position parameter
      color: "dark", // Set the color of the toast to dark
    });
  };

  const closeMenu = async () => {
    await menuController.close("main-content");
  };

  const deleteBillsFromStorage = async () => {
    // Delete the bills object from the storage of the device

    presentAlert({
      // Call the presentAlert function
      header: "Clear all data?", // Set the header of the alert to "Delete Bill?"
      message: "This action cannot be undone.", // Set the message of the alert to "This action cannot be undone."
      buttons: [
        // Set the buttons of the alert
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            // Create a new handler for the cancel button
            hapticsImpactLight(); // Trigger a light haptic feedback
            return; // Return nothing
          },
        },
        {
          text: "Delete",
          handler: async () => {
            // Create a new handler for the delete button
            await store.remove("mybills"); // Remove the bills object from the storage of the device
            store.clear(); // Clear the storage of the device to remove any remaining data
            presentToast("bottom", "Bills cleared from storage successfully"); // Call the presentToast function
            hapticsImpactLight(); // Trigger a light haptic feedback
            closeMenu(); // Call the closeMenu function
          },
        },
      ],
    });
  };

  return (
    <IonMenu menuId="main-content" contentId="main-content">
      <IonContent className="ion-padding">
        <IonButton className="ion-float-right" fill="clear" onClick={closeMenu}>
          <IonIcon icon={closeOutline} />
        </IonButton>
        <IonList>
          <IonListHeader>
            <IonLabel>Menu</IonLabel>
          </IonListHeader>
          <strong>
            <IonItem onClick={closeMenu} routerLink="/home">
              <IonIcon slot="start" icon={fileTrayFullOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem onClick={closeMenu} routerLink="/tos">
              <IonIcon slot="start" icon={shieldCheckmarkOutline} />
              <IonLabel>Terms of Use</IonLabel>
            </IonItem>
            <IonItem onClick={closeMenu} routerLink="/privacy">
              <IonIcon slot="start" icon={shieldCheckmarkOutline} />
              <IonLabel>Privacy Policy</IonLabel>
            </IonItem>
            <IonItem onClick={deleteBillsFromStorage}>
              <IonIcon slot="start" icon={sparklesOutline} />
              <IonLabel>Clear Data</IonLabel>
            </IonItem>
          </strong>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
