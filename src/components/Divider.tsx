import { IonButton, IonIcon, IonItemDivider, IonLabel } from "@ionic/react";
import {
  caretDownOutline,
  caretForwardOutline,
  swapVerticalOutline,
} from "ionicons/icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  operator: string;
  setOperator: (operator: string) => void;
  hideList: boolean;
  disabled: boolean;
  toggle?: () => void;
}

export const Divider: React.FC<Props> = ({
  title,
  operator,
  setOperator,
  hideList,
  disabled,
  toggle,
}) => {
  const toggleSortOrder = () => {
    setOperator(operator === "+" ? "-" : "+");
  };

  return (
    <IonItemDivider color="light" sticky>
      <IonButton fill="clear" size="small" onClick={toggle}>
        {hideList ? (
          <IonIcon icon={caretForwardOutline} />
        ) : (
          <IonIcon icon={caretDownOutline} />
        )}
      </IonButton>
      <IonLabel>{title}</IonLabel>
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
