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

import "./Tos.css";
import { strings } from "../language/language";

const Tos: React.FC = () => {
  const values = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
  ];
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
            <IonTitle size="large">{strings.TERMS_OF_USE}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup onIonChange={accordionGroupChange}>
          <IonAccordion value="first">
            <IonItem id="first" slot="header" color="light">
              <IonLabel>{strings.TERMS_1}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_2}</p>
              <p>{strings.TERMS_3}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem id="second" slot="header" color="light">
              <IonLabel>{strings.TERMS_4}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_5}</p>
              <p>{strings.TERMS_6}</p>
              <p>{strings.TERMS_7}</p>
              <p>{strings.TERMS_8}</p>
              <p>{strings.TERMS_9}</p>
              <p>{strings.TERMS_10}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem id="third" slot="header" color="light">
              <IonLabel>{strings.TERMS_11}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_12}</p>
              <p>{strings.TERMS_13}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem id="fourth" slot="header" color="light">
              <IonLabel>{strings.TERMS_14}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_15}</p>
              <p>{strings.TERMS_16}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem id="fifth" slot="header" color="light">
              <IonLabel>{strings.TERMS_17}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_18}</p>
              <p>{strings.TERMS_19}</p>
              <p>{strings.TERMS_20}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="sixth">
            <IonItem id="sixth" slot="header" color="light">
              <IonLabel>{strings.TERMS_21}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_22}</p>
              <p>{strings.TERMS_23}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="seventh">
            <IonItem id="seventh" slot="header" color="light">
              <IonLabel>{strings.TERMS_24}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_25}</p>
              <p>{strings.TERMS_26}</p>
              <p>{strings.TERMS_27}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="eighth">
            <IonItem id="eighth" slot="header" color="light">
              <IonLabel>{strings.TERMS_28}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_29}</p>
              <p>{strings.TERMS_30}</p>
              <p>{strings.TERMS_31}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="ninth">
            <IonItem id="ninth" slot="header" color="light">
              <IonLabel>{strings.TERMS_32}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_33}</p>
              <p>{strings.TERMS_34}</p>
              <p>{strings.TERMS_35}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="tenth">
            <IonItem id="tenth" slot="header" color="light">
              <IonLabel>{strings.TERMS_36}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_37}</p>
            </div>
          </IonAccordion>
          <IonAccordion value="eleventh">
            <IonItem id="eleventh" slot="header" color="light">
              <IonLabel>{strings.TERMS_38}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>{strings.TERMS_39}</p>
              <p>{strings.TERMS_40}</p>
              <p>{strings.TERMS_41}</p>
              <p>{strings.TERMS_42}</p>
              <p>{strings.TERMS_43}</p>
              <p>{strings.TERMS_44}</p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tos;
