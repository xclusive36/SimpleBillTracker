import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import "./Home.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Bill } from "../interfaces/interfaces";
import { sortSetArraysByDate } from "../utils/sortSetArraysByDate";
import { Sidemenu } from "../components/Sidemenu";
import { Stats } from "../components/Stats";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { BillList } from "../components/BillList";
import { clearBadge } from "../capacitor/badge";
import {
  cancelPendingLocalNotifications,
  checkLocalNotificationPermissions,
  getPendingLocalNotifications,
  localNotificationActionPerformed,
  localNotificationReceived,
  removeAllLocalNotificationListeners,
  requestLocalNotificationPermissions,
  scheduleLocalNotification,
} from "../capacitor/localNotifications";
import { getStoredData, store } from "../utils/storedData";
import { strings } from "../language/language";
import { AddModal } from "../components/AddModal";
import { setAccessoryBarVisible } from "../capacitor/keyboard";
import { AppContext } from "../context/context";
import {
  listenForAuthStateChanged,
  removeAuthStateChangedListener,
} from "../capacitor/firebase";

const Home: React.FC = () => {
  const { ContextObj, setContextObj } = useContext(AppContext); // Use the useContext hook to access the AppContext object
  const [present] = useIonToast(); // Create a new toast using the useIonToast hook
  const todaysBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the todaysBills item
  const upcomingBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the upcomingBills item
  const pastDueBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the pastDueBills item
  const paidBillsRef = useRef<HTMLIonItemSlidingElement>(null); // Create a reference to the paidBills item
  const [searchTerm, setSearchTerm] = useState<string>(""); // Create a new state called categorySearchTerm and set it to an empty string

  useEffect(() => {
    // UseEffect hook runs on start. It listens for auth state changes
    listenForAuthStateChanged(); // Listen for auth state changes

    return () => {
      removeAuthStateChangedListener(); // Remove the auth state change listener when the component unmounts
    };
  }, []);

  useEffect(() => {
    // UseEffect hook runs on start. It sets the accessory bar visible
    setAccessoryBarVisible(true);
    return () => {
      setAccessoryBarVisible(false);
    };
  }, []);

  useEffect(() => {
    // UseEffect hook runs on start. It clears the badge count and checks for local notification permissions
    // If permissions are granted, it adds the local notification received and action performed listeners
    // If permissions are not granted, it requests them
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

  const setSortedDataToState = async (data: Bill[]) => {
    // This function sorts the bills object by date and sets the sorted data to state
    const sortedData = sortSetArraysByDate(data); // Call the sortSetArraysByDate function and assign the returned object to a variable

    setContextObj({
      // Set the context object
      ...ContextObj, // Spread the existing context object
      allBills: data, // Set the allBills array to the data object
      todaysBills: sortedData.todaysArray, // Set the todaysBills array to the todaysArray from the sortedData object
      upcomingBills: sortedData.upcomingArray, // Set the upcomingBills array to the upcomingArray from the sortedData object
      pastDueBills: sortedData.pastDueArray, // Set the pastDueBills array to the pastDueArray from the sortedData object
      paidBills: sortedData.paidArray, // Set the paidBills array to the paidArray from the sortedData object
    });
  };

  useEffect(() => {
    // UseEffect hook runs on start. It gets the stored data and sets the sorted data to state every minute
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
    // This async function schedules a new local notification with a title, body, date, and any extra data
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
          strings.DUE_TODAY,
          `${strings.DUE_YOUR} ${bill.name} ${strings.DUE_BILL_TODAY}.`,
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
          strings.DUE_WEEK,
          `${strings.DUE_YOUR} ${bill.name} ${strings.DUE_BILL_WEEK}.`,
          billDueDatePriorWeek.toISOString().substring(0, 10),
          bill.id
        );
      }

      // schedule a notification the day the bill is past due
      if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
        scheduleNewLocalNotification(
          strings.DUE_PASTDUE,
          `${strings.DUE_YOUR} ${bill.name} ${strings.DUE_BILL_PASTDUE}.`,
          billPastDue.toISOString().substring(0, 10),
          bill.id
        );
    } else {
      // id && (await cancelPendingLocalNotifications(id));
      const notifications = await getPendingLocalNotifications();
      const id = notifications?.notifications.find(
        (notification) => notification.extra.id === bill.id
      )?.id;

      // for each pendingNotification in notifications.notifications, if the id matches the deletedBill.id, cancel the notification
      notifications?.notifications.forEach(async (notification) => {
        if (notification.extra.id === bill.id) {
          await cancelPendingLocalNotifications(notification.id);
        }
      });
    }

    await store.set("mybills", updatedBills); // Set the updated bills array to the storage of the device
    setSortedDataToState(updatedBills); // Set the sorted data to state
    presentToast("bottom", strings.BILL_UPDATED); // Call the presentToast function
  };

  return (
    <>
      <Sidemenu store={store} />
      <IonPage id="main-content">
        <Header />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{strings.TITLE}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Stats />
          <AddModal
            presentToast={presentToast}
            setSortedDataToState={setSortedDataToState}
          />
          <IonList>
            {ContextObj.pastDueBills && ContextObj.pastDueBills.length > 0 && (
              <BillList
                billArray={ContextObj.pastDueBills}
                searchTerm={searchTerm}
                billRef={pastDueBillsRef}
                presentToast={presentToast}
                setSortedDataToState={setSortedDataToState}
                setBillAsPaid={setBillAsPaid}
                dividerTitle={strings.BILL_PAST_DIVIDER}
                color="danger"
              />
            )}
            {ContextObj.todaysBills && ContextObj.todaysBills.length > 0 && (
              <BillList
                billArray={ContextObj.todaysBills}
                searchTerm={searchTerm}
                billRef={todaysBillsRef}
                presentToast={presentToast}
                setSortedDataToState={setSortedDataToState}
                setBillAsPaid={setBillAsPaid}
                dividerTitle={strings.BILL_TODAY_DIVIDER}
                color="warning"
              />
            )}
            <BillList
              billArray={ContextObj.upcomingBills}
              searchTerm={searchTerm}
              billRef={upcomingBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle={strings.BILL_UPCOMING_DIVIDER}
            />
            <BillList
              billArray={ContextObj.paidBills}
              searchTerm={searchTerm}
              billRef={paidBillsRef}
              presentToast={presentToast}
              setSortedDataToState={setSortedDataToState}
              setBillAsPaid={setBillAsPaid}
              dividerTitle={strings.BILL_PAID_DIVIDER}
              color="success"
              archive={false}
            />
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
