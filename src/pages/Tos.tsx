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
            <IonTitle size="large">Terms of Service</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup onIonChange={accordionGroupChange}>
          <IonAccordion value="first">
            <IonItem id="first" slot="header" color="light">
              <IonLabel>Welcome to LiteStep!</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                Thanks for using our products and services. The Services are
                provided by LiteStep.
              </p>
              <p>
                By using our Services, you are agreeing to these terms. Please
                read them carefully.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem id="second" slot="header" color="light">
              <IonLabel>Using our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                You must follow any policies made available to you within the
                Services.
              </p>
              <p>
                Don’t misuse our Services. Don’t try to access our Services
                using any method other than the interface and the instructions
                provided. You may use our Services only as permitted by law,
                including applicable export and re-export control laws and
                regulations. We may suspend or stop providing our Services to
                you if you do not comply with our terms and conditions or
                policies or if we are investigating suspected misconduct.
              </p>
              <p>
                Using our Services does not give you ownership of any
                intellectual property rights in our Services or the content you
                access. You may not reuse content from our Services unless
                granted permission or are otherwise permitted by law. These
                terms do not grant you the right to use any branding or logos
                used in our Services. Don’t remove, obscure, or alter any legal
                notices displayed in or along with our Services.
              </p>
              <p>
                Any content provided is the sole responsibility of the entity
                that makes it available. We may review content to determine
                whether it is illegal or violates our policies, we may remove or
                refuse to display content that we reasonably believe violates
                our policies or the law.
              </p>
              <p>
                In connection with your use of the Services, we may send you
                service announcements, administrative messages, and other
                information. You may opt out of some of those communications.
              </p>
              <p>
                Do not use such Services in a way that distracts you and
                prevents you from obeying traffic or safety laws.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem id="third" slot="header" color="light">
              <IonLabel>Your User Account</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                You will need a User Account in order to use our Services. You
                may create your own account, or you may use either an Apple,
                Google, or Facebook Account to Login.
              </p>
              <p>
                To protect your LiteStep Account, keep your password
                confidential. You are responsible for the activity that happens
                in your LiteStep Account.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem id="fourth" slot="header" color="light">
              <IonLabel>Privacy and Copyright Protection</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                Our privacy policy explains how we treat your personal data and
                protect your privacy when you use our Services. By using our
                Services, you agree that LiteStep can use such data in
                accordance with our privacy policies.
              </p>
              <p>
                We respond to notices of alleged copyright infringement and
                terminate accounts of repeat infringers according to the process
                set out in the U.S. Digital Millennium Copyright Act.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem id="fifth" slot="header" color="light">
              <IonLabel>Your Content in our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                Our Services allow you to upload, submit, store, send or receive
                content. You retain ownership of any intellectual property
                rights that you hold in that content.
              </p>
              <p>
                When you upload, submit, store, send or receive content to or
                through our Services, you give LiteStep (and those we work with)
                a worldwide license to use, host, store, reproduce, modify,
                create derivative works (such as those resulting from
                translations, adaptations or other changes we make so that your
                content works better with our Services), communicate, publish,
                publicly perform, publicly display and distribute such content.
                The rights you grant in this license are for the limited purpose
                of operating, promoting, and improving our Services, and to
                develop new ones. This license continues even if you stop using
                our Services. Some Services may offer you ways to access and
                remove content that has been provided to that Service.
              </p>
              <p>
                You can find more information about how LiteStep uses and stores
                content in the privacy policy. If you submit feedback or
                suggestions about our Services, we may use your feedback or
                suggestions without obligation to you.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="sixth">
            <IonItem id="sixth" slot="header" color="light">
              <IonLabel>About Software in our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                When a Service requires or includes downloadable software, this
                software may update automatically on your device once a new
                version or feature is available. Some Services may let you
                adjust your automatic update settings.
              </p>
              <p>
                LiteStep gives you a personal, worldwide, royalty-free,
                non-assignable and non-exclusive license to use the software
                provided to you by LiteStep as part of the Services. This
                license is for the sole purpose of enabling you to use and enjoy
                the benefit of the Services as provided by LiteStep, in the
                manner permitted by these terms. You may not copy, modify,
                distribute, sell, or lease any part of our Services or included
                software, nor may you reverse engineer or attempt to extract the
                source code of that software, unless laws prohibit those
                restrictions or you have our written permission.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="seventh">
            <IonItem id="seventh" slot="header" color="light">
              <IonLabel>Modifying and Terminating our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                We are constantly changing and improving our Services. We may
                add or remove functionalities or features, and we may suspend or
                stop a Service altogether.
              </p>
              <p>
                You can stop using our Services at any time, although we’ll be
                sorry to see you go. LiteStep may also stop providing Services
                to you, or add or create new limits to our Services at any time.
              </p>
              <p>
                We believe that you own your data and preserving your access to
                such data is important. If we discontinue a Service, where
                reasonably possible, we will give you reasonable advance notice
                and a chance to get information out of that Service.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="eighth">
            <IonItem id="eighth" slot="header" color="light">
              <IonLabel>Our Warranties and Disclaimers</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                We provide our Services using a commercially reasonable level of
                skill and care and we hope that you will enjoy using them. But
                there are certain things that we don’t promise about our
                Services.
              </p>
              <p>
                OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL
                TERMS, NEITHER LITESTEP NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE
                ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON’T
                MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE
                SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY,
                AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE
                SERVICES “AS IS”.
              </p>
              <p>
                SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, LIKE THE
                IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE AND NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE
                EXCLUDE ALL WARRANTIES.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="ninth">
            <IonItem id="ninth" slot="header" color="light">
              <IonLabel>Liability for our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                WHEN PERMITTED BY LAW, LITESTEP, AND LITESTEPS SUPPLIERS AND
                DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS,
                REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.
              </p>
              <p>
                TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF LITESTEP,
                AND ITS SUPPLIERS AND DISTRIBUTORS, FOR ANY CLAIMS UNDER THESE
                TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE
                AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO
                SUPPLYING YOU THE SERVICES AGAIN).
              </p>
              <p>
                IN ALL CASES, LITESTEP, AND ITS SUPPLIERS AND DISTRIBUTORS, WILL
                NOT BE LIABLE FOR ANY LOSS OR DAMAGE THAT IS NOT REASONABLY
                FORESEEABLE.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="tenth">
            <IonItem id="tenth" slot="header" color="light">
              <IonLabel>Business uses of our Services</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                If you are using our Services on behalf of a business, that
                business accepts these terms. It will hold harmless and
                indemnify LiteStep and its affiliates, officers, agents, and
                employees from any claim, suit or action arising from or related
                to the use of the Services or violation of these terms,
                including any liability or expense arising from claims, losses,
                damages, suits, judgments, litigation costs and attorneys’ fees.
              </p>
            </div>
          </IonAccordion>
          <IonAccordion value="eleventh">
            <IonItem id="eleventh" slot="header" color="light">
              <IonLabel>About these Terms</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>
                We may modify these terms or Services at any time. We’ll post
                notice of modifications to these Terms and Services on this
                page. We’ll post notice of modified additional terms in the
                applicable Service. Changes will not apply retroactively and
                will become effective no sooner than fourteen days after they
                are posted. However, changes addressing new functions for a
                Service or changes made for legal reasons will be effective
                immediately. If you do not agree to the modified terms for a
                Service, you should discontinue your use of that Service.
              </p>
              <p>
                If there is a conflict between these terms and the additional
                terms, the additional terms will control for that conflict.
              </p>
              <p>
                These terms control the relationship between LiteStep and you.
                They do not create any third party beneficiary rights.
              </p>
              <p>
                If you do not comply with these terms, and we don’t take action
                right away, this doesn’t mean that we are giving up any rights
                that we may have (such as taking action in the future).
              </p>
              <p>
                If it turns out that a particular term is not enforceable, this
                will not affect any other terms.
              </p>
              <p>
                The laws of Maryland, U.S.A., will apply to any disputes arising
                out of or relating to these terms or the Services. All claims
                arising out of or relating to these terms or the Services will
                be litigated exclusively in the federal or state courts of
                Maryland, USA, and you and LiteStep consent to personal
                jurisdiction in those courts.
              </p>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tos;
