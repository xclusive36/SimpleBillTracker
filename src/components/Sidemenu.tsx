import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
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
  cloudDownloadOutline,
  cloudUploadOutline,
  fileTrayFullOutline,
  logOutOutline,
  shieldCheckmarkOutline,
  sparklesOutline,
} from "ionicons/icons";
import { strings } from "../language/language";
import { useContext, useEffect, useState } from "react";
import APPLE from "../assets/appleid_button@2x.png";
import APPLE_DARK from "../assets/appleid_button@2x-dark.png";
import {
  addDocument,
  getCollection,
  getCurrentUser,
  getDocument,
  signInWithApple,
  signOut,
  updateDocument,
} from "../capacitor/firebase";
import { UserContext } from "../context/userContext";
import { AppContext } from "../context/context";
import { sortSetArraysByDate } from "../utils/sortSetArraysByDate";

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
      header: strings.REMOVE_ALL_DATA, // Set the header of the alert to "Delete Bill?"
      message: strings.RESET_SUBHEADER, // Set the message of the alert to "This action cannot be undone."
      buttons: [
        // Set the buttons of the alert
        {
          text: strings.ALERT_CANCEL,
          role: "cancel",
          handler: () => {
            // Create a new handler for the cancel button
            hapticsImpactLight(); // Trigger a light haptic feedback
            return; // Return nothing
          },
        },
        {
          text: strings.DELETE,
          handler: async () => {
            // Create a new handler for the delete button
            await store.remove("mybills"); // Remove the bills object from the storage of the device
            store.clear(); // Clear the storage of the device to remove any remaining data
            presentToast("bottom", "Bills cleared from storage successfully"); // Call the presentToast function
            hapticsImpactLight(); // Trigger a light haptic feedback
            closeMenu(); // Call the closeMenu function
            window.location.reload(); // Reload the window to update the UI
          },
        },
      ],
    });
  };

  const { UserObj, setUserObj } = useContext(UserContext); // Use the useContext hook to access the UserContext object
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const signIn = async () => {
    // Sign in with Apple

    try {
      const result = await signInWithApple(); // Call the signInWithApple function
      // add user to context
      setIsLoggedIn(true);
      setUserObj({ user: result }); // Set the user object in the UserContext to the result
      hapticsImpactLight(); // Trigger a light haptic feedback
      presentToast("bottom", "Signed in successfully"); // Call the presentToast function
    } catch (error) {
      console.error(error); // Log the error to the console
      hapticsImpactLight(); // Trigger a light haptic feedback
      presentToast("bottom", "Failed to sign in"); // Call the presentToast function
    }
  };

  const logout = async () => {
    // Sign out

    try {
      await signOut(); // Call the signOut function
      // remove user from context
      setIsLoggedIn(false);
      setUserObj({}); // Set the user object to an empty object
      hapticsImpactLight(); // Trigger a light haptic feedback
      presentToast("bottom", "Signed out successfully"); // Call the presentToast function
    } catch (error) {
      console.error(error); // Log the error to the console
      hapticsImpactLight(); // Trigger a light haptic feedback
      presentToast("bottom", "Failed to sign out"); // Call the presentToast function
    }
  };

  const checkLoginStatus = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        setUserObj({ user });
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const backupData = async () => {
    // Backup the bills data to the cloud
    presentAlert({
      // Call the presentAlert function
      header: strings.BACKUP_HEADER, // Set the header of the alert to 'Backup Data
      message: strings.BACKUP_SUBHEADER, // Set the message of the alert to "This action cannot be undone."
      buttons: [
        // Set the buttons of the alert
        {
          text: strings.ALERT_CANCEL,
          role: "cancel",
          handler: () => {
            // Create a new handler for the cancel button
            hapticsImpactLight(); // Trigger a light haptic feedback
            return; // Return nothing
          },
        },
        {
          text: strings.BACKUP,
          handler: async () => {
            // Create a new handler for the backup button
            try {
              // check if firestore already has data for the user
              // if yes, ask user if they want to overwrite
              // if no, proceed to backup
              const checkIfDataExists = await getCollection({
                reference: `user/${UserObj.user.uid}/bills`,
              });

              if (checkIfDataExists) {
                const data = await store.get("mybills"); // Get the bills data from the storage of the device
                if (data) {
                  // Check if the data exists
                  updateDocument({
                    reference: `user/${UserObj.user.uid}/bills/${checkIfDataExists[0].id}`,
                    data: { bills: data },
                  }); // Add the data to the Firestore database
                  presentToast("bottom", strings.BACKUP_SUCCESS); // Call the presentToast function
                  hapticsImpactLight(); // Trigger a light haptic feedback
                }
              } else {
                const data = await store.get("mybills"); // Get the bills data from the storage of the device
                if (data) {
                  // Check if the data exists
                  addDocument({
                    reference: `user/${UserObj.user.uid}/bills`,
                    data: { bills: data },
                  }); // Add the data to the Firestore database
                  presentToast("bottom", strings.BACKUP_SUCCESS); // Call the presentToast function
                  hapticsImpactLight(); // Trigger a light haptic feedback
                }
              }
            } catch (error) {
              console.error(error); // Log the error to the console
              hapticsImpactLight(); // Trigger a light haptic feedback
              presentToast("bottom", strings.BACKUP_FAILED); // Call the presentToast function
            }
          },
        },
      ],
    });
  };

  const { setContextObj } = useContext(AppContext); // Use the useContext hook to access the AppContext object

  const restoreData = async () => {
    // Restore the bills data from the cloud and save it to the storage of the device
    const data = await getCollection({
      reference: `user/${UserObj.user.uid}/bills`,
    }); // Get the data from the Firestore database
    if (data && data[0] && data[0].data) {
      // Check if the data exists
      store.set("mybills", data[0].data.bills); // Set the data to the storage of the device
      // set to context
      const sortedData = sortSetArraysByDate(data[0].data.bills); // Call the sortSetArraysByDate function and assign the returned object to a variable

      setContextObj({
        // Set the context object
        allBills: data[0].data.bills, // Set the allBills array to the data object
        todaysBills: sortedData.todaysArray, // Set the todaysBills array to the todaysArray from the sortedData object
        upcomingBills: sortedData.upcomingArray, // Set the upcomingBills array to the upcomingArray from the sortedData object
        pastDueBills: sortedData.pastDueArray, // Set the pastDueBills array to the pastDueArray from the sortedData object
        paidBills: sortedData.paidArray, // Set the paidBills array to the paidArray from the sortedData object
      });

      presentToast("bottom", "Bills restored successfully"); // Call the presentToast function
      hapticsImpactLight(); // Trigger a light haptic feedback
    } else {
      presentToast("bottom", "No data found to restore"); // Call the presentToast function
      hapticsImpactLight(); // Trigger a light haptic feedback
    }
  };

  return (
    <IonMenu menuId="main-content" contentId="main-content">
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Menu</IonLabel>
          </IonListHeader>
          <strong>
            <IonItem onClick={closeMenu} routerLink="/home">
              <IonIcon slot="start" icon={fileTrayFullOutline} />
              <IonLabel>{strings.HOME}</IonLabel>
            </IonItem>
            <IonItem onClick={closeMenu} routerLink="/tos">
              <IonIcon slot="start" icon={shieldCheckmarkOutline} />
              <IonLabel>{strings.TERMS_OF_USE}</IonLabel>
            </IonItem>
            <IonItem onClick={closeMenu} routerLink="/privacy">
              <IonIcon slot="start" icon={shieldCheckmarkOutline} />
              <IonLabel>{strings.PRIVACY_POLICY}</IonLabel>
            </IonItem>
            <IonItem onClick={deleteBillsFromStorage}>
              <IonIcon slot="start" icon={sparklesOutline} />
              <IonLabel>{strings.CLEAR_DATA}</IonLabel>
            </IonItem>
            {!isloggedIn && (
              <IonButton onClick={signIn} expand="full" fill="clear">
                <IonImg src={APPLE} />
              </IonButton>
            )}
            {isloggedIn && (
              <>
                <IonItem onClick={backupData}>
                  <IonIcon slot="start" icon={cloudUploadOutline} />
                  <IonLabel>Cloud Backup</IonLabel>
                </IonItem>
                <IonItem
                  onClick={restoreData}
                  className={isloggedIn ? "" : "ion-hide"}>
                  <IonIcon slot="start" icon={cloudDownloadOutline} />
                  <IonLabel>Cloud Restore</IonLabel>
                </IonItem>
                <IonItem
                  className={isloggedIn ? "" : "ion-hide"}
                  onClick={logout}>
                  <IonIcon slot="start" icon={logOutOutline} />
                  <IonLabel>Logout</IonLabel>
                </IonItem>
              </>
            )}
          </strong>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
