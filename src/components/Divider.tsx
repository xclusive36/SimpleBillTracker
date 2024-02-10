import { IonItemDivider, IonLabel } from "@ionic/react";
import { ReactNode } from "react";

interface Props {
  title: string;
}

export const Divider: React.FC<Props> = ({ title }) => (
  <IonItemDivider
    color="light"
    sticky
    style={{
      borderTop: "1px solid #ddd",
      borderBottom: "1px solid #ddd",
    }}
  >
    <IonLabel>
      <small>{title}</small>
    </IonLabel>
  </IonItemDivider>
);
