import { IonCardTitle, IonItem, IonLabel } from "@ionic/react";
import { ReactNode } from "react";

interface Props {
  title: string;
}

export const NoBills: React.FC<Props> = ({ title }) => (
  <IonItem lines="none">
    <IonLabel>
      <IonCardTitle style={{ fontSize: "1.25rem" }}>{title}</IonCardTitle>
    </IonLabel>
  </IonItem>
);
