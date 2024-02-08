import {
  IonButton,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { convertDateToString } from "../utils/convertDateToString";
import { Bill } from "../interfaces/interfaces";
import { Storage } from "@ionic/storage";
import { sortSetArraysByDate } from "../utils/sortSetArraysByDate";

const store = new Storage(); // Create a new instance of the Storage class
await store.create(); // Create the storage of the device if it doesn't exist

const Home: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<string>(""); // Create a new state called debugInfo and set it as an empty string
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
    position: "top" | "middle" | "bottom",
    message: string
  ) => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: "dark",
    });
  };

  const addBill = async (newBill: Bill) => {
    setDebugInfo(JSON.stringify(newBill));
    // Create a new asynchronous function called addBill
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    const newBills = [...bills, newBill]; // Create a new array with the new bill added to the existing bills array
    await store.set("mybills", newBills); // Set the new bills array to the storage of the device
    setSortedDataToState(newBills); // Set the sorted data to state
    presentToast("bottom", "Bill added successfully");
  };

  const updateBill = async (updatedBill: Bill) => {
    // Create a new asynchronous function called updateBill
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    // locate the bill in the bills by id array and update it
    const updatedBills = bills.map((bill: Bill) => {
      if (bill.id === updatedBill.id) {
        return updatedBill;
      } else {
        return bill;
      }
    });
    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", "Bill updated successfully");
    // close any open sliding items
    todaysBillsRef.current?.closeOpened();
    upcomingBillsRef.current?.closeOpened();
    pastDueBillsRef.current?.closeOpened();
    paidBillsRef.current?.closeOpened();
  };

  const deleteBill = async (deletedBill: Bill) => {
    // Create a new asynchronous function called deleteBill
    presentAlert({
      header: "Delete Bill?",
      message: "This action cannot be undone.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            return;
          },
        },
        {
          text: "Delete",
          handler: async () => {
            const bills = await getStoredData(); // Get the bills object from the storage of the device
            const updatedBills = bills.filter(
              (bill: Bill) => bill.id !== deletedBill.id
            ); // Create a new array with the deleted bill removed from the existing bills array
            await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
            setSortedDataToState(updatedBills); // Set the sorted data to state
            presentToast("bottom", "Bill deleted successfully");
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
    await store.remove("mybills");
    store.clear(); // Clear the storage of the device
    presentToast("bottom", "Bills cleared from storage successfully");
  };

  const setBillAsPaid = async (bill: Bill) => {
    // Create a new asynchronous function called setBillAsPaid
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    const updatedBills = bills.map((b: Bill) => {
      if (b.id === bill.id) {
        return { ...b, paid: !b.paid };
      } else {
        return b;
      }
    });
    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", "Bill updated successfully");
  };

  const presentAlertUpdate = (bill: Bill) => {
    presentAlert({
      header: "Update Bill",
      inputs: [
        {
          placeholder: "Bill Name",
          id: "name",
          value: bill.name,
        },
        {
          placeholder: "Bill Category",
          id: "type",
          value: bill.type,
        },
        {
          type: "number",
          placeholder: "Minimum amount owed",
          min: 1,
          id: "amount",
          value: bill.amount,
        },
        {
          type: "date",
          id: "dueDate",
          value: bill.dueDate,
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
            const billObj: Bill = {
              id: bill.id,
              name: data[0],
              type: data[1],
              amount: data[2],
              dueDate: data[3],
              paid: bill.paid,
            };
            updateBill(billObj);
          },
        },
      ],
    });
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
          <IonItemDivider
            color="light"
            sticky
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <IonLabel>
              <small>Due Today</small>
            </IonLabel>
          </IonItemDivider>
          {todaysBills.length === 0 ? (
            <IonItem lines="none">
              <IonLabel>
                <IonCardTitle style={{ fontSize: "1.25rem" }}>
                  No Bills Due Today
                </IonCardTitle>
              </IonLabel>
            </IonItem>
          ) : (
            todaysBills.map((bill, index) => (
              <IonItemSliding key={index} ref={todaysBillsRef}>
                <IonItemOptions
                  side="start"
                  onIonSwipe={() => {
                    setBillAsPaid(bill);
                    todaysBillsRef.current?.closeOpened();
                  }}
                >
                  <IonItemOption
                    color="success"
                    onClick={() => {
                      setBillAsPaid(bill);
                      todaysBillsRef.current?.closeOpened();
                    }}
                  >
                    Archive
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines={index === todaysBills.length - 1 ? "none" : "inset"}
                >
                  <IonLabel>
                    <IonCardTitle style={{ fontSize: "1.25rem" }}>
                      {bill.name}
                    </IonCardTitle>
                    <small>{bill.type}</small>
                  </IonLabel>
                  <IonText slot="end">
                    <IonCardTitle
                      className="ion-text-right"
                      style={{ fontSize: "1rem" }}
                    >
                      ${bill.amount}
                    </IonCardTitle>
                    <small>{convertDateToString(bill.dueDate)}</small>
                  </IonText>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="secondary"
                    onClick={() => presentAlertUpdate(bill)}
                  >
                    Update
                  </IonItemOption>
                  <IonItemOption
                    color="danger"
                    onClick={() => deleteBill(bill)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          )}
          <IonItemDivider
            color="light"
            sticky
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <IonLabel>
              <small>Upcoming Bills</small>
            </IonLabel>
          </IonItemDivider>
          {upcomingBills.length === 0 ? (
            <IonItem lines="none">
              <IonLabel>
                <IonCardTitle style={{ fontSize: "1.25rem" }}>
                  No Upcoming Bills
                </IonCardTitle>
              </IonLabel>
            </IonItem>
          ) : (
            upcomingBills.map((bill, index) => (
              <IonItemSliding key={index} ref={upcomingBillsRef}>
                <IonItemOptions
                  side="start"
                  onIonSwipe={() => {
                    setBillAsPaid(bill);
                    upcomingBillsRef.current?.closeOpened();
                  }}
                >
                  <IonItemOption
                    color="success"
                    onClick={() => {
                      setBillAsPaid(bill);
                      upcomingBillsRef.current?.closeOpened();
                    }}
                  >
                    Archive
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines={index === upcomingBills.length - 1 ? "none" : "inset"}
                >
                  <IonLabel>
                    <IonCardTitle style={{ fontSize: "1.25rem" }}>
                      {bill.name}
                    </IonCardTitle>
                    <small>{bill.type}</small>
                  </IonLabel>
                  <IonText slot="end">
                    <IonCardTitle
                      className="ion-text-right"
                      style={{ fontSize: "1rem" }}
                    >
                      ${bill.amount}
                    </IonCardTitle>
                    <small>{convertDateToString(bill.dueDate)}</small>
                  </IonText>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="secondary"
                    onClick={() => presentAlertUpdate(bill)}
                  >
                    Update
                  </IonItemOption>
                  <IonItemOption
                    color="danger"
                    onClick={() => deleteBill(bill)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          )}
          <IonItemDivider
            color="light"
            sticky
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <IonLabel>
              <small>Past Due Bills</small>
            </IonLabel>
          </IonItemDivider>
          {pastDueBills.length === 0 ? (
            <IonItem lines="none">
              <IonLabel>
                <IonCardTitle style={{ fontSize: "1.25rem" }}>
                  No Past Due Bills
                </IonCardTitle>
              </IonLabel>
            </IonItem>
          ) : (
            pastDueBills.map((bill, index) => (
              <IonItemSliding key={index} ref={pastDueBillsRef}>
                <IonItemOptions
                  side="start"
                  onIonSwipe={() => {
                    setBillAsPaid(bill);
                    pastDueBillsRef.current?.closeOpened();
                  }}
                >
                  <IonItemOption
                    color="success"
                    onClick={() => {
                      setBillAsPaid(bill);
                      pastDueBillsRef.current?.closeOpened();
                    }}
                  >
                    Archive
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines={index === pastDueBills.length - 1 ? "none" : "inset"}
                >
                  <IonLabel>
                    <IonCardTitle style={{ fontSize: "1.25rem" }}>
                      {bill.name}
                    </IonCardTitle>
                    <small>{bill.type}</small>
                  </IonLabel>
                  <IonText slot="end">
                    <IonCardTitle
                      className="ion-text-right"
                      style={{ fontSize: "1rem" }}
                    >
                      ${bill.amount}
                    </IonCardTitle>
                    <small>{convertDateToString(bill.dueDate)}</small>
                  </IonText>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="secondary"
                    onClick={() => presentAlertUpdate(bill)}
                  >
                    Update
                  </IonItemOption>
                  <IonItemOption
                    color="danger"
                    onClick={() => deleteBill(bill)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          )}
          <IonItemDivider
            color="light"
            sticky
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <IonLabel>
              <small>Paid Bills</small>
            </IonLabel>
          </IonItemDivider>
          {paidBills.length === 0 ? (
            <IonItem lines="none">
              <IonLabel>
                <IonCardTitle style={{ fontSize: "1.25rem" }}>
                  No Paid Bills
                </IonCardTitle>
              </IonLabel>
            </IonItem>
          ) : (
            paidBills.map((bill, index) => (
              <IonItemSliding key={index} ref={paidBillsRef}>
                <IonItemOptions
                  side="start"
                  onIonSwipe={() => {
                    setBillAsPaid(bill);
                    paidBillsRef.current?.closeOpened();
                  }}
                >
                  <IonItemOption
                    color="success"
                    onClick={() => {
                      setBillAsPaid(bill);
                      paidBillsRef.current?.closeOpened();
                    }}
                  >
                    UnArchive
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines={index === paidBills.length - 1 ? "none" : "inset"}
                >
                  <IonLabel>
                    <IonCardTitle style={{ fontSize: "1.25rem" }}>
                      {bill.name}
                    </IonCardTitle>
                    <small>{bill.type}</small>
                  </IonLabel>
                  <IonText slot="end">
                    <IonCardTitle
                      className="ion-text-right"
                      style={{ fontSize: "1rem" }}
                    >
                      ${bill.amount}
                    </IonCardTitle>
                    <small>{convertDateToString(bill.dueDate)}</small>
                  </IonText>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="secondary"
                    onClick={() => presentAlertUpdate(bill)}
                  >
                    Update
                  </IonItemOption>
                  <IonItemOption
                    color="danger"
                    onClick={() => deleteBill(bill)}
                  >
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          )}
        </IonList>
        {/* <IonButton expand="full" onClick={deleteBillsFromStorage}>
          Delete Bills from Storage
        </IonButton> */}
        {debugInfo}
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
