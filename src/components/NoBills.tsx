import {
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonText,
} from "@ionic/react";
import { ReactNode } from "react";

interface Props {
  animation?: boolean;
}

export const NoBills: React.FC<Props> = ({ animation = false }) => (
  <IonItem>
    <IonLabel>
      <IonSkeletonText
        animated={animation}
        style={{ width: "50%" }}
      />
      <p>
        <IonSkeletonText animated={animation} style={{ width: "30%" }} />
      </p>
    </IonLabel>
    <IonText slot="end">
      <IonSkeletonText
        animated={animation}
        className="ion-text-right"
        style={{ width: "20%" }}
      />
      <p>
        <IonSkeletonText
          className="ion-text-right"
          style={{ width: "30%" }}
          animated={animation}
        />
      </p>
    </IonText>
  </IonItem>
);
