import { IonItem, IonSearchbar } from "@ionic/react";
import { hapticsImpactLight } from "../capacitor/haptics";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Search: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <IonItem lines="none">
      <IonSearchbar
        placeholder="Search for a bill"
        value={searchTerm}
        onIonInput={(e) => {
          hapticsImpactLight(); // Haptic feedback
          setSearchTerm(e.detail.value!); // Set the search term
        }}
      />
    </IonItem>
  );
};
