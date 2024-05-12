import {
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { reduceCount } from "../utils/reduceCount";
import { strings } from "../language/language";
import { useContext } from "react";
import { AppContext } from "../context/context";

export const Stats: React.FC = () => {
  const { ContextObj } = useContext(AppContext);
  const { todaysBills, upcomingBills, pastDueBills, paidBills } = ContextObj;

  return (
    <IonGrid>
      <IonRow
        style={{
          borderTop: "1px solid var(--ion-color-light)",
          padding: ".5rem",
        }}>
        <IonCol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <IonCardSubtitle>{strings.DUE}</IonCardSubtitle>
            <IonCardTitle color="primary">
              {todaysBills.length + upcomingBills.length}
            </IonCardTitle>
          </div>
        </IonCol>
        <IonCol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <IonCardSubtitle>{strings.OVERDUE}</IonCardSubtitle>
            <IonCardTitle color="danger">{pastDueBills.length}</IonCardTitle>
          </div>
        </IonCol>
        <IonCol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <IonCardSubtitle>{strings.PAID}</IonCardSubtitle>
            <IonCardTitle color="success">{paidBills.length}</IonCardTitle>
          </div>
        </IonCol>
      </IonRow>
      <IonRow
        style={{
          borderTop: "1px solid var(--ion-color-light)",
          padding: ".5rem",
        }}>
        <IonCol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <IonCardSubtitle>{strings.TOTAL_DUE}</IonCardSubtitle>
            <IonCardTitle>
              $
              {reduceCount([...todaysBills, ...upcomingBills, ...pastDueBills])}
            </IonCardTitle>
          </div>
        </IonCol>
        <IonCol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <IonCardSubtitle>{strings.TOTAL_PAID}</IonCardSubtitle>
            <IonCardTitle color="success">
              ${reduceCount(paidBills)}
            </IonCardTitle>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
