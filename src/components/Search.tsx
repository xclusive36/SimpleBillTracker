import { IonItem, IonSearchbar } from "@ionic/react";
import { hapticsImpactLight } from "../capacitor/haptics";
import { strings } from "../language/language";
import { hideKeyboard } from "../capacitor/keyboard";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Search: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        hideKeyboard();
      }}
      style={{ position: "sticky" }}
    >
      <IonItem lines="none">
        <IonSearchbar
          placeholder={strings.SEARCH_PLACEHOLDER}
          value={searchTerm}
          onIonInput={(e) => {
            hapticsImpactLight(); // Haptic feedback
            setSearchTerm(e.detail.value!); // Set the search term
          }}
        />
      </IonItem>
    </form>
  );
};
