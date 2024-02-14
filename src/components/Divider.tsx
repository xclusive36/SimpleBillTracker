import { IonButton, IonIcon, IonItemDivider, IonLabel } from "@ionic/react";
import { swapVerticalOutline } from "ionicons/icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  operator: string;
  setOperator: (operator: string) => void;
  disabled: boolean;
}

export const Divider: React.FC<Props> = ({
  title,
  operator,
  setOperator,
  disabled,
}) => {
  const toggleSortOrder = () => {
    setOperator(operator === "+" ? "-" : "+");
  };

  return (
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
      <IonButton
        disabled={disabled}
        fill="clear"
        slot="end"
        color="dark"
        onClick={toggleSortOrder}
      >
        <IonIcon icon={swapVerticalOutline} />
      </IonButton>
    </IonItemDivider>
  );
};
