import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { reduceCount } from "../utils/reduceCount";
import { Bill } from "../interfaces/interfaces";
import { strings } from "../language/language";

interface Props {
  todaysBills: Bill[];
  upcomingBills: Bill[];
  pastDueBills: Bill[];
  paidBills: Bill[];
}

export const Stats: React.FC<Props> = ({
  todaysBills,
  upcomingBills,
  pastDueBills,
  paidBills,
}) => {
  return (
    <IonGrid style={{ borderTop: "1px solid #f0f0f0" }}>
      <IonRow>
        <IonCol className="ion-text-center">
          <IonCardSubtitle>{strings.DUE}</IonCardSubtitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardSubtitle>{strings.OVERDUE}</IonCardSubtitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardSubtitle>{strings.PAID}</IonCardSubtitle>
        </IonCol>
      </IonRow>
      <IonRow
        style={{
          borderBottom: "1px solid #f0f0f0",
          paddingBottom: "5px",
        }}
      >
        <IonCol className="ion-text-center">
          <IonCardTitle color="primary">
            {todaysBills.length + upcomingBills.length}
          </IonCardTitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardTitle color="danger">{pastDueBills.length}</IonCardTitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardTitle color="success">{paidBills.length}</IonCardTitle>
        </IonCol>
      </IonRow>
      <IonRow style={{ paddingTop: "5px" }}>
        <IonCol className="ion-text-center">
          <IonCardSubtitle>{strings.TOTAL_DUE}</IonCardSubtitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardSubtitle>{strings.TOTAL_PAID}</IonCardSubtitle>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-text-center">
          <IonCardTitle>
            ${reduceCount([...todaysBills, ...upcomingBills, ...pastDueBills])}
          </IonCardTitle>
        </IonCol>
        <IonCol className="ion-text-center">
          <IonCardTitle color="success">${reduceCount(paidBills)}</IonCardTitle>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
