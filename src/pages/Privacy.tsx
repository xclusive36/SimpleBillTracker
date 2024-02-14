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
            <IonTitle size="large">Privacy Policy</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup onIonChange={accordionGroupChange}>
          <IonAccordion value="first">
            <IonItem id="first" slot="header" color="light">
              <IonLabel>Introduction</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                This Privacy Policy is meant to help you understand what
                information we collect, why we collect it, and how you can
                update, manage, export, and delete your information.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem id="second" slot="header" color="light">
              <IonLabel>Information we collect</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                What ever data you create within the application its self, you
                have full control over. It’s your data to Add, Edit, or Delete.
                If you do not wish to store any information, simply delete it
                off of the application. We want you to understand that you are
                in control of your data.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem id="third" slot="header" color="light">
              <IonLabel>Things you create or provide to us</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                When you create a LiteStep Account, you provide us with personal
                information that includes your name and a email.
              </p>
              <p>
                The content you add using the application is your own. We do not
                assume ownership of any information you input into the
                application.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem id="fourth" slot="header" color="light">
              <IonLabel>
                Information we collect as you use our services
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                We may collect crash or bug reports sent by the application
                during usage.
              </p>
              <p>
                We collect this information when a LiteStep service on your
                device contacts our servers — for example, when you install an
                app from the IOS App Store or when a service checks for
                automatic updates.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem id="fifth" slot="header" color="light">
              <IonLabel>Why we collect data</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                We use your information to ensure our services are working as
                intended, such as tracking outages or troubleshooting issues
                that get report to us. We use that information to make
                improvements to our services.
              </p>
              <p>
                We use the information we collect in existing services to help
                us develop new ones. We use the information we collect to
                provide personalized content.
              </p>
              <p>
                We don’t share information that personally identifies you with
                advertisers, such as your name or email.
              </p>
              <p>
                We use data for analytics and measurement to understand how our
                services are used. For example, we analyze data about your
                visits to our sites to do things like optimize product design.
                We use a variety of tools to do this, including Google
                Analytics.
              </p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Privacy;
