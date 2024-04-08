import { IonButton, IonIcon, IonItemDivider, IonLabel } from "@ionic/react";
import { swapVerticalOutline } from "ionicons/icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  operator: string;
  setOperator: (operator: string) => void;
  disabled: boolean;
  toggle?: () => void;
}

export const Divider: React.FC<Props> = ({
  title,
  operator,
  setOperator,
  disabled,
  toggle,
}) => {
  const toggleSortOrder = () => {
    setOperator(operator === "+" ? "-" : "+");
  };

  return (
    <IonItemDivider color="light" sticky onClick={toggle}>
      <IonLabel>
        <small>{title}</small>
      </IonLabel>
      <IonButton
        disabled={disabled}
        fill="clear"
        slot="end"
        color="dark"
        onClick={toggleSortOrder}>
        <IonIcon icon={swapVerticalOutline} />
      </IonButton>
    </IonItemDivider>
  );
};
