import {
  AccordionGroupCustomEvent,
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Header } from "../components/Header";

import "./Privacy.css";
import { strings } from "../language/language";

const Privacy: React.FC = () => {
  const values = ["first", "second", "third", "fourth", "fifth"];
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    // Create a new function called accordionGroupChange
    const collapsedItems = values.filter((value) => value !== ev.detail.value); // Create a new variable called collapsedItems and set it to an array of values that are not equal to the value of the event
    collapsedItems.forEach((item) => {
      // Loop through each item in the collapsedItems array
      const accordion = document.getElementById(item); // Create a new variable called accordion and set it to the element with the id of the current item
      if (accordion) {
        // Check if the accordion variable exists
        if (!accordion.classList.contains("ion-color-light")) {
          // Check if the accordion does not contain the class "ion-color-light"
          accordion.classList.add("ion-color-light"); // Add the class "ion-color-light" to the accordion element if it does not already contain it
          // This will change the background color of the accordion back to the default color when it is collapsed
        }
      }
    });

    const selectedValue = ev.detail.value; // Create a new variable called selectedValue and set it to the value of the event
    const selectedAccordion = document.getElementById(selectedValue); // Create a new variable called selectedAccordion and set it to the element with the id of the selectedValue
    if (selectedAccordion) {
      // Check if the selectedAccordion variable exists
      if (selectedAccordion.classList.contains("ion-color-light")) {
        // Check if the selectedAccordion contains the class "ion-color-light"
        selectedAccordion.classList.remove("ion-color-light"); // Remove the class "ion-color-light" from the selectedAccordion element if it contains it
        // This will change the background color of the selected accordion to the primary color when it is expanded
      }
    }
  };

  return (
    <IonPage id="main-content">
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{strings.PRIVACY_POLICY}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup onIonChange={accordionGroupChange}>
          <IonAccordion value="first">
            <IonItem id="first" slot="header" color="light">
              <IonLabel>{strings.PRIVACY_POLICY}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.PRIVACY_POLICY_TEXT_1}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem id="second" slot="header" color="light">
              <IonLabel>{strings.PRIVACY_POLICY_TEXT_2}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.PRIVACY_POLICY_TEXT_3}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem id="third" slot="header" color="light">
              <IonLabel>{strings.PRIVACY_POLICY_TEXT_4}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.PRIVACY_POLICY_TEXT_5}</p>
              <p>{strings.PRIVACY_POLICY_TEXT_6}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem id="fourth" slot="header" color="light">
              <IonLabel>{strings.PRIVACY_POLICY_TEXT_7}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.PRIVACY_POLICY_TEXT_8}</p>
              <p>{strings.PRIVACY_POLICY_TEXT_9}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem id="fifth" slot="header" color="light">
              <IonLabel>{strings.PRIVACY_POLICY_TEXT_10}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.PRIVACY_POLICY_TEXT_11}</p>
              <p>{strings.PRIVACY_POLICY_TEXT_12}</p>
              <p>{strings.PRIVACY_POLICY_TEXT_13}</p>
              <p>{strings.PRIVACY_POLICY_TEXT_14}</p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Privacy;
