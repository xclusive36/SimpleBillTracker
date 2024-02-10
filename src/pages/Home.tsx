import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { Bill } from "../interfaces/interfaces";
import { Storage } from "@ionic/storage";
import { sortSetArraysByDate } from "../utils/sortSetArraysByDate";
import { Divider } from "../components/Divider";
import { NoBills } from "../components/NoBills";
import { BillItem } from "../components/BillItem";

const store = new Storage(); // Create a new instance of the Storage class
store.create(); // Create the storage of the device if it doesn't exist

const Home: React.FC = () => {
  // Create a new functional component called Home
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook
  const [present] = useIonToast(); // Create a new toast using the useIonToast hook
  const todaysBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the todaysBills item
  const upcomingBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the upcomingBills item
  const pastDueBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the pastDueBills item
  const paidBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the paidBills item

  const getStoredData = async () => {
    // Create a new asynchronous function called getStoredData
    const data = await store.get("mybills"); // Get the bills object from the storage of the device

    if (data) {
      // Long form of if statement to check if data exists. Shorthand conflicts with the data variable type for some reason
      // If the data exists
      return data; // Return the data
    } else {
      // If the data doesn't exist
      return []; // Return an empty array
    }
  };

  const [todaysBills, setTodaysBills] = useState<Bill[]>([]); // Create a new state called todaysBills and set it as an empty array
  const [upcomingBills, setUpcomingBills] = useState<Bill[]>([]); // Create a new state called upcomingBills and set it to an empty array
  const [pastDueBills, setPastDueBills] = useState<Bill[]>([]); // Create a new state called pastDueBills and set it to an empty array
  const [paidBills, setPaidBills] = useState<Bill[]>([]); // Create a new state called paidBills and set it to an empty array

  const setSortedDataToState = async (data: Bill[]) => {
    const sortedData = sortSetArraysByDate(data); // Call the sortSetArraysByDate function and assign the returned object to a variable

    setTodaysBills(sortedData.todaysArray); // Set to state the todaysBills array from the sortedData object
    setUpcomingBills(sortedData.upcomingArray); // Set to state the upcomingBills array from the sortedData object
    setPastDueBills(sortedData.pastDueArray); // Set to state the pastDueBills array from the sortedData object
    setPaidBills(sortedData.paidArray); // Set to state the paidBills array from the sortedData object
  };

  useEffect(() => {
    // Create a new effect using the useEffect hook
    getStoredData() // Call the getStoredData function to get the bills object from the storage of the device
      .then((data) => {
        // If the data exists (i.e. the bills array of objects exists in the storage of the device)
        setSortedDataToState(data); // Set the sorted data to state
      });
  }, []); // Run the effect only once when the component mounts

  const presentToast = (
    // Create a new function called presentToast
    position: "top" | "middle" | "bottom", // Create a new parameter called position and set it to a string
    message: string // Create a new parameter called message and set it to a string
  ) => {
    present({
      // Call the present function from the useIonToast hook
      message: message, // Set the message of the toast to the message parameter
      duration: 1500, // Set the duration of the toast to 1500ms
      position: position, // Set the position of the toast to the position parameter
      color: "dark", // Set the color of the toast to dark
    });
  };

  const addBill = async (newBill: Bill) => {
    // Create a new function called addBill
    // Create a new asynchronous function called addBill
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    const newBills = [...bills, newBill]; // Create a new array with the new bill added to the existing bills array
    await store.set("mybills", newBills); // Set the new bills array to the storage of the device
    setSortedDataToState(newBills); // Set the sorted data to state
    presentToast("bottom", "Bill added successfully"); // Call the presentToast function
  };

  const updateBill = async (updatedBill: Bill) => {
    // Create a new asynchronous function called updateBill
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    // locate the bill in the bills by id array and update it
    const updatedBills = bills.map((bill: Bill) => {
      // Create a new array with the updated bill
      if (bill.id === updatedBill.id) {
        // If the bill id matches the updated bill id
        return updatedBill; // Return the updated bill
      } else {
        // If the bill id doesn't match the updated bill id
        return bill; // Return the bill as is
      }
    });
    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", "Bill updated successfully"); // Call the presentToast function
    // close any open sliding items
    todaysBillsRef.current?.closeOpened();
    upcomingBillsRef.current?.closeOpened();
    pastDueBillsRef.current?.closeOpened();
    paidBillsRef.current?.closeOpened();
  };

  const deleteBill = async (deletedBill: Bill) => {
    // Create a new asynchronous function called deleteBill
    presentAlert({
      // Call the presentAlert function
      header: "Delete Bill?", // Set the header of the alert to "Delete Bill?"
      message: "This action cannot be undone.", // Set the message of the alert to "This action cannot be undone."
      buttons: [
        // Set the buttons of the alert
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            // Create a new handler for the cancel button
            return; // Return nothing
          },
        },
        {
          text: "Delete",
          handler: async () => {
            // Create a new handler for the delete button
            const bills = await getStoredData(); // Get the bills object from the storage of the device
            const updatedBills = bills.filter(
              // Create a new array with the deleted bill removed from the existing bills array
              (bill: Bill) => bill.id !== deletedBill.id
            ); // Create a new array with the deleted bill removed from the existing bills array
            await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
            setSortedDataToState(updatedBills); // Set the sorted data to state
            presentToast("bottom", "Bill deleted successfully"); // Call the presentToast function
            // close any open sliding items
            todaysBillsRef.current?.closeOpened();
            upcomingBillsRef.current?.closeOpened();
            pastDueBillsRef.current?.closeOpened();
            paidBillsRef.current?.closeOpened();
          },
        },
      ],
    });
  };

  const deleteBillsFromStorage = async () => {
    // Delete the bills object from the storage of the device
    await store.remove("mybills"); // Remove the bills object from the storage of the device
    store.clear(); // Clear the storage of the device to remove any remaining data
    presentToast("bottom", "Bills cleared from storage successfully"); // Call the presentToast function
  };

  const setBillAsPaid = async (bill: Bill) => {
    // Create a new asynchronous function called setBillAsPaid
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    const updatedBills = bills.map((b: Bill) => {
      // Create a new array with the updated bill
      if (b.id === bill.id) {
        // If the bill id matches the updated bill id
        return { ...b, paid: !b.paid }; // Return the updated bill with the paid property set to the opposite of the current paid property
      } else {
        // If the bill id doesn't match the updated bill id
        return b; // Return the bill as is
      }
    });
    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", "Bill updated successfully"); // Call the presentToast function
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Simple Bill Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Simple Bill Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <Divider title="Due Today" />
          {todaysBills.length === 0 ? (
            <NoBills title="No Bills Due Today" />
          ) : (
            todaysBills.map((bill, index) => (
              <BillItem
                key={index}
                index={index}
                itemRef={todaysBillsRef}
                setArchiveState={setBillAsPaid}
                bill={bill}
                billArray={todaysBills}
                updateBill={updateBill}
                deleteBill={deleteBill}
              />
            ))
          )}
          <Divider title="Upcoming Bills" />
          {upcomingBills.length === 0 ? (
            <NoBills title="No Upcoming Bills" />
          ) : (
            upcomingBills.map((bill, index) => (
              <BillItem
                key={index}
                index={index}
                itemRef={upcomingBillsRef}
                setArchiveState={setBillAsPaid}
                bill={bill}
                billArray={upcomingBills}
                updateBill={updateBill}
                deleteBill={deleteBill}
              />
            ))
          )}
          <Divider title="Past Due Bills" />
          {pastDueBills.length === 0 ? (
            <NoBills title="No Past Due Bills" />
          ) : (
            pastDueBills.map((bill, index) => (
              <BillItem
                key={index}
                index={index}
                itemRef={pastDueBillsRef}
                setArchiveState={setBillAsPaid}
                bill={bill}
                billArray={pastDueBills}
                updateBill={updateBill}
                deleteBill={deleteBill}
              />
            ))
          )}
          <Divider title="Paid Bills" />
          {paidBills.length === 0 ? (
            <NoBills title="No Paid Bills" />
          ) : (
            paidBills.map((bill, index) => (
              <BillItem
                key={index}
                index={index}
                itemRef={paidBillsRef}
                setArchiveState={setBillAsPaid}
                bill={bill}
                billArray={paidBills}
                updateBill={updateBill}
                deleteBill={deleteBill}
              />
            ))
          )}
        </IonList>
        {/* <IonButton expand="full" onClick={deleteBillsFromStorage}>
          Delete Bills from Storage
        </IonButton> */}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            expand="full"
            onClick={() =>
              presentAlert({
                header: "Add a Bill",
                inputs: [
                  {
                    placeholder: "Bill Name",
                    id: "name",
                  },
                  {
                    placeholder: "Bill Category",
                    id: "type",
                  },
                  {
                    type: "number",
                    placeholder: "Minimum amount owed",
                    min: 1,
                    id: "amount",
                  },
                  {
                    type: "date",
                    id: "dueDate",
                  },
                ],
                buttons: [
                  {
                    text: "Cancel",
                    role: "cancel",
                  },
                  {
                    text: "OK",
                    role: "confirm",
                    handler: (data) => {
                      const bill: Bill = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: data[0],
                        type: data[1],
                        amount: data[2],
                        dueDate: data[3],
                        paid: false,
                      };
                      addBill(bill);
                    },
                  },
                ],
              })
            }
          >
            Add Bill
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
