import {
  IonButton,
  IonContent,
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
import { sortSetArraysByDate } from "../utils/sortSetArraysByDate";
import { Sidemenu } from "../components/Sidemenu";
import { Stats } from "../components/Stats";
import { hapticsImpactLight } from "../capacitor/haptics";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { BillList } from "../components/BillList";
import { clearBadge } from "../capacitor/badge";
import {
  cancelAllPendingLocalNotifications,
  cancelPendingLocalNotifications,
  checkLocalNotificationPermissions,
  getDeliveredLocalNotifications,
  getPendingLocalNotifications,
  localNotificationActionPerformed,
  localNotificationReceived,
  removeAllLocalNotificationListeners,
  requestLocalNotificationPermissions,
  scheduleLocalNotification,
} from "../capacitor/localNotifications";
import {
  keyboardWillHide,
  keyboardWillShow,
  removeAllKeyboardListeners,
} from "../capacitor/keyboard";
import { getStoredData, store } from "../utils/storedData";
import { addBill } from "../utils/setBill";

const Home: React.FC = () => {
  const [presentAlert] = useIonAlert(); // Create a new alert using the useIonAlert hook
  const [present] = useIonToast(); // Create a new toast using the useIonToast hook

  const todaysBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the todaysBills item
  const upcomingBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the upcomingBills item
  const pastDueBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the pastDueBills item
  const paidBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the paidBills item

  const [todaysBills, setTodaysBills] = useState<Bill[]>([]); // Create a new state called todaysBills and set it as an empty array
  const [upcomingBills, setUpcomingBills] = useState<Bill[]>([]); // Create a new state called upcomingBills and set it to an empty array
  const [pastDueBills, setPastDueBills] = useState<Bill[]>([]); // Create a new state called pastDueBills and set it to an empty array
  const [paidBills, setPaidBills] = useState<Bill[]>([]); // Create a new state called paidBills and set it to an empty array
  const [searchTerm, setSearchTerm] = useState<string>(""); // Create a new state called categorySearchTerm and set it to an empty string

  useEffect(() => {
    clearBadge(); // Clear the badge count when the component mounts

    // Check if localNotification permissions are granted
    checkLocalNotificationPermissions().then((status) => {
      if (status?.display === "granted") {
        // permissions granted
        console.log("Permissions previously granted, Adding listeners");
        localNotificationReceived(); // Add the local notification received listener
        localNotificationActionPerformed(); // Add the local notification action performed listener
      } else {
        // If permissions are not granted, request them
        requestLocalNotificationPermissions().then((status) => {
          if (!status) return; // permissions not granted or badge not supported
          console.log("Permissions now granted, Adding listeners");
          localNotificationReceived(); // Add the local notification received listener
          localNotificationActionPerformed(); // Add the local notification action performed listener
        });
      }
    });

    return () => {
      // Cleanup the background task listeners when the component unmounts
      removeAllLocalNotificationListeners(); // Remove all the background task listeners
    };
  }, []);

  useEffect(() => {
    keyboardWillShow(); // Add keyboard will show listener
    keyboardWillHide(); // Add keyboard will hide listener

    return () => {
      removeAllKeyboardListeners(); // Remove all keyboard listeners
    };
  }, []);

  const setSortedDataToState = async (data: Bill[]) => {
    const sortedData = sortSetArraysByDate(data); // Call the sortSetArraysByDate function and assign the returned object to a variable

    setTodaysBills(sortedData.todaysArray); // Set to state the todaysBills array from the sortedData object
    setUpcomingBills(sortedData.upcomingArray); // Set to state the upcomingBills array from the sortedData object
    setPastDueBills(sortedData.pastDueArray); // Set to state the pastDueBills array from the sortedData object
    setPaidBills(sortedData.paidArray); // Set to state the paidBills array from the sortedData object
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Create a new interval
      getStoredData().then((data) => {
        // Get the bills object from the storage of the device
        setSortedDataToState(data); // Set the sorted data to state
      });
    }, 60000); // Set the interval to 60000ms (1 minute)

    getStoredData().then((data) => {
      // Get the bills object from the storage of the device
      setSortedDataToState(data); // Set the sorted data to state
    });
  }, []);

  const presentToast = (
    // This function presents a toast with a message and a position
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

  const scheduleNewLocalNotification = async (
    title: string,
    body: string,
    date: string,
    extra?: any
  ) => {
    return scheduleLocalNotification(title, body, date, extra);
  };

  const setBillAsPaid = async (bill: Bill) => {
    // This function sets a bill as paid in the bills object in the storage of the device and sets the sorted data to state
    const bills = await getStoredData(); // Get the bills object from the storage of the device
    // get index of bill in bills array
    const index = bills.findIndex((b: Bill) => b.id === bill.id); // Find the index of the bill in the bills array of objects
    const updatedBills = [...bills]; // Create a new array with the existing bills array
    updatedBills[index].paid = !updatedBills[index].paid; // Set the paid property of the bill to the opposite of the current paid property

    if (!updatedBills[index].paid) {
      // If the bill is set as paid

      const billDueDatePriorWeek = new Date(bill.dueDate);
      billDueDatePriorWeek.setDate(billDueDatePriorWeek.getDate() - 7);
      const today = new Date();
      const todayPlusOneWeek = new Date();
      todayPlusOneWeek.setDate(today.getDate() + 7);

      const billPastDue = new Date(bill.dueDate);
      billPastDue.setDate(billPastDue.getDate() + 1);

      const dateDueAsArray = bill.dueDate.split("-");
      const dueMonth = dateDueAsArray[1];
      const dueDay = dateDueAsArray[2];
      const dueYear = dateDueAsArray[0];
      const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`;

      const billDueDate = new Date(dueDateString);

      // if the bill is due today or later, schedule a notification for today
      if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {
        scheduleNewLocalNotification(
          "Bill due today",
          `Your ${bill.name} bill is due today.`,
          bill.dueDate,
          bill.id
        );
      }

      // if the bill is due later than a week from today, schedule a notification for a week before the due date
      if (
        billDueDate.setHours(0, 0, 0, 0) >=
        todayPlusOneWeek.setHours(0, 0, 0, 0)
      ) {
        scheduleNewLocalNotification(
          "Bill due in one week",
          `Your ${bill.name} bill is due in one week.`,
          billDueDatePriorWeek.toISOString().substring(0, 10),
          bill.id
        );
      }

      // schedule a notification the day the bill is past due
      if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
        scheduleNewLocalNotification(
          "Bill past due",
          `Your ${bill.name} bill is past due.`,
          billPastDue.toISOString().substring(0, 10),
          bill.id
        );
    } else {
      // If the bill is set as unpaid
      const notifications = await getPendingLocalNotifications();
      const id = notifications?.notifications.find(
        (notification) => notification.extra.id === bill.id
      )?.id;

      id && (await cancelPendingLocalNotifications(id));
    }

    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", "Bill updated successfully"); // Call the presentToast function
  };

  return (
    <>
      <Sidemenu store={store} />
      <IonPage id="main-content">
        <Header />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Simple Bill Tracker</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Stats
            todaysBills={todaysBills}
            upcomingBills={upcomingBills}
            pastDueBills={pastDueBills}
            paidBills={paidBills}
          />
          <IonButton
            size="small"
            onClick={() => {
              getPendingLocalNotifications();
            }}
          >
            Get Pending Notifications
          </IonButton>
          <IonButton
            size="small"
            onClick={() => {
              cancelAllPendingLocalNotifications();
            }}
          >
            Cancel Pending Notifications
          </IonButton>
          <IonButton
            size="small"
            onClick={() => {
              getDeliveredLocalNotifications();
            }}
          >
            Get Received Notifications
          </IonButton>
          <IonList>
            <BillList
              billArray={pastDueBills}
              searchTerm={searchTerm}
              billRef={pastDueBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle="Past Due Bills"
              noBillsTitle="No Past Due Bills"
              color="danger"
            />
            <BillList
              billArray={todaysBills}
              searchTerm={searchTerm}
              billRef={todaysBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle="Due Today"
              noBillsTitle="No Bills Due Today"
              color="warning"
            />
            <BillList
              billArray={upcomingBills}
              searchTerm={searchTerm}
              billRef={upcomingBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle="Upcoming Bills"
              noBillsTitle="No Upcoming Bills"
            />
            <BillList
              billArray={paidBills}
              searchTerm={searchTerm}
              billRef={paidBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle="Paid Bills"
              noBillsTitle="No Paid Bills"
              color="success"
              archive={false}
            />
          </IonList>
          <IonButton
            expand="full"
            onClick={() => {
              hapticsImpactLight(); // Trigger a light haptic feedback
              presentAlert({
                // Call the presentAlert function to present an alert
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
                    handler: () => hapticsImpactLight(), // Trigger a light haptic feedback
                  },
                  {
                    text: "OK",
                    role: "confirm",
                    handler: (data) => {
                      hapticsImpactLight(); // Trigger a light haptic feedback
                      const bill: Bill = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: data[0],
                        type: data[1],
                        amount: data[2],
                        dueDate: data[3],
                        paid: false,
                      };
                      addBill(bill, presentToast, setSortedDataToState);
                    },
                  },
                ],
              });
            }}
          >
            Add Bill
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
