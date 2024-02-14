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
    <>
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCardSubtitle>Due</IonCardSubtitle>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCardSubtitle>Past Due</IonCardSubtitle>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCardSubtitle>Paid</IonCardSubtitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCardTitle color="primary">
                {todaysBills.length +
                  upcomingBills.length +
                  pastDueBills.length}
              </IonCardTitle>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCardTitle color="danger">{pastDueBills.length}</IonCardTitle>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonCardTitle color="success">{paidBills.length}</IonCardTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Total Due</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>${reduceCount([...todaysBills, ...upcomingBills, ...pastDueBills])}</IonCardTitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Total Paid</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle color="success">${reduceCount(paidBills)}</IonCardTitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};
