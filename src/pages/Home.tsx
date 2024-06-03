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
    // This function sets a bill as either paid or unpaid in the bills object in the storage of the device and sets the sorted data to state
    // if the bill is being set as paid, it removes any pending notifications for the bill and it schedules a new notification for the next due date.
    // If the bill is being set as unpaid, it re-enables any pending notifications for the bill and cancels any future repeating bills and notifications

    const bills = await getStoredData(); // Get the full bills object from the storage of the device
    const index = bills.findIndex((b: Bill) => b.id === bill.id); // Find the index of the bill in the bills array of objects
    const updatedBills = [...bills]; // Create a new array with the existing bills array pulled from storge
    updatedBills[index].paid = !updatedBills[index].paid; // Set the paid property of the bill to the opposite of the current paid property

    if (!updatedBills[index].paid) {
      console.log("Bill is now marked as unpaid");
      // changing from paid to unpaid, re-enable any pending notifications for the bill

      const billDueDatePriorWeek = new Date(bill.dueDate); // Create a new date object with the dueDate property of the bill
      billDueDatePriorWeek.setDate(billDueDatePriorWeek.getDate() - 7); // Set the date to 7 days before the due date
      const today = new Date(); // Create a new date object with the current date
      const todayPlusOneWeek = new Date(); // Create a new date object with the current date
      todayPlusOneWeek.setDate(today.getDate() + 7); // Set the date to 7 days from the current date

      const billPastDue = new Date(bill.dueDate); // Create a new date object with the dueDate property of the bill
      billPastDue.setDate(billPastDue.getDate() + 1); // Set the past due date to 1 day after the due date

      const dateDueAsArray = bill.dueDate.split("-"); // Split the dueDate property of the bill into an array so it can be reordered
      const dueMonth = dateDueAsArray[1]; // Set the dueMonth to the second item in the array
      const dueDay = dateDueAsArray[2]; // Set the dueDay to the third item in the array
      const dueYear = dateDueAsArray[0]; // Set the dueYear to the first item in the array
      const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`; // Reorder the array to a string in the format "MM/DD/YYYY" (US format)

      const billDueDate = new Date(dueDateString); // Create a new date object with the newly formatted due date

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
      if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {
        scheduleNewLocalNotification(
          strings.DUE_PASTDUE,
          `${strings.DUE_YOUR} ${bill.name} ${strings.DUE_BILL_PASTDUE}.`,
          billPastDue.toISOString().substring(0, 10),
          bill.id
        );
      }

      // if the bill is a repeating bill, find the repeating bill and delete it. Also, delete any pending notifications for the repeating bill
      if (bill.repeat !== "Never") {
        // First, check the repeating amount of the bill and find the next due date
        const nextDueDate = new Date(bill.dueDate); // Create a new date object with the due date of the bill
        if (bill.repeat === "Week") {
          // If the repeat value is Week
          nextDueDate.setDate(nextDueDate.getDate() + 7); // Set the new due date to 7 days after the current due date
        } else if (bill.repeat === "2Week") {
          // If the repeat value is 2Week
          nextDueDate.setDate(nextDueDate.getDate() + 14); // Set the new due date to 14 days after the current due date
        } else if (bill.repeat === "4Week") {
          // If the repeat value is 4Week
          nextDueDate.setDate(nextDueDate.getDate() + 28); // Set the new due date to 28 days after the current due date
        } else if (bill.repeat === "Month") {
          // If the repeat value is Month
          nextDueDate.setMonth(nextDueDate.getMonth() + 1); // Set the new due date to 1 month after the current due date
        } else if (bill.repeat === "2Month") {
          // If the repeat value is 2Month
          nextDueDate.setMonth(nextDueDate.getMonth() + 2); // Set the new due date to 2 months after the current due date
        } else if (bill.repeat === "3Month") {
          // If the repeat value is 3Month
          nextDueDate.setMonth(nextDueDate.getMonth() + 3); // Set the new due date to 3 months after the current due date
        } else if (bill.repeat === "4Month") {
          // If the repeat value is 4Month
          nextDueDate.setMonth(nextDueDate.getMonth() + 4); // Set the new due date to 4 months after the current due date
        } else if (bill.repeat === "6Month") {
          // If the repeat value is 6Month
          nextDueDate.setMonth(nextDueDate.getMonth() + 6); // Set the new due date to 6 months after the current due date
        } else if (bill.repeat === "Year") {
          // If the repeat value is Year
          nextDueDate.setFullYear(nextDueDate.getFullYear() + 1); // Set the new due date to 1 year after the current due date
        }

        // Find the index of the repeating bill in the bills array by filtering the bills array and finding the index of the bill with the same name,
        // amount, and type as the bill being set as unpaid and the due date set to the next due date
        const repeatingBillIndex = updatedBills.findIndex(
          (b: Bill) =>
            b.name === bill.name &&
            b.amount === bill.amount &&
            b.type === bill.type &&
            b.dueDate === nextDueDate.toISOString().split("T")[0]
        );

        // if the repeating bill is found, remove it from the bills array
        if (repeatingBillIndex !== -1) {
          updatedBills.splice(repeatingBillIndex, 1); // Remove the repeating bill from the bills array
        }

        // Remove any pending notifications for the repeating bill
        const notifications = await getPendingLocalNotifications(); // Get the pending notifications from the device storage
        const id = notifications?.notifications.find(
          // Find the notification id for the repeating bill
          (notification) =>
            notification.extra.id === bill.id && notification.extra.repeat
        )?.id;

        // for each pendingNotification in notifications.notifications, if the id matches the deletedBill.id, cancel the notification
        notifications?.notifications.forEach(async (notification) => {
          // Loop through the notifications
          if (notification.extra.id === bill.id && notification.extra.repeat) {
            // If the notification id matches the bill id and the notification is for a repeating bill
            await cancelPendingLocalNotifications(notification.id); // Cancel the notification
          }
        });
      }
    } else {
      console.log("Bill is now marked as paid");
      // changing from unpaid to paid, remove any pending notifications for the bill. Then if the bill is a repeating bill,
      // Add a new bill for the next due date and schedule notifications for it.

      // First, remove any pending notifications for the bill
      const notifications = await getPendingLocalNotifications(); // Get the pending notifications from the device storage
      const id = notifications?.notifications.find(
        // Find the notification id for the bill
        (notification) => notification.extra.id === bill.id // Find the notification with the extra id matching the bill id
      )?.id;

      // for each pendingNotification in notifications.notifications, if the id matches the deletedBill.id, cancel the notification
      notifications?.notifications.forEach(async (notification) => {
        // Loop through the notifications
        if (notification.extra.id === bill.id) {
          // If the notification id matches the bill id
          await cancelPendingLocalNotifications(notification.id); // Cancel the notification
        }
      });

      // if the bill is a repeating bill, add a new bill for the next due date and schedule notifications for it
      console.log(bill.repeat);
      if (
        bill.repeat === "Week" ||
        bill.repeat === "2Week" ||
        bill.repeat === "4Week" ||
        bill.repeat === "Month" ||
        bill.repeat === "2Month" ||
        bill.repeat === "3Month" ||
        bill.repeat === "4Month" ||
        bill.repeat === "6Month" ||
        bill.repeat === "Year"
      ) {
        console.log(
          "Bill is a repeating bill, adding new bill for next due date"
        );
        // First, set a new bill due date for the new bill by adding the repeat value to the current due date
        const newBillDueDate = new Date(bill.dueDate); // Create a new date object with the due date of the bill
        if (bill.repeat === "Week") {
          // If the repeat value is Week
          newBillDueDate.setDate(newBillDueDate.getDate() + 7); // Set the new due date to 7 days after the current due date
        } else if (bill.repeat === "2Week") {
          // If the repeat value is 2Week
          newBillDueDate.setDate(newBillDueDate.getDate() + 14); // Set the new due date to 14 days after the current due date
        } else if (bill.repeat === "4Week") {
          // If the repeat value is 4Week
          newBillDueDate.setDate(newBillDueDate.getDate() + 28); // Set the new due date to 28 days after the current due date
        } else if (bill.repeat === "Month") {
          // If the repeat value is Month
          newBillDueDate.setMonth(newBillDueDate.getMonth() + 1); // Set the new due date to 1 month after the current due date
        } else if (bill.repeat === "2Month") {
          // If the repeat value is 2Month
          newBillDueDate.setMonth(newBillDueDate.getMonth() + 2); // Set the new due date to 2 months after the current due date
        } else if (bill.repeat === "3Month") {
          // If the repeat value is 3Month
          newBillDueDate.setMonth(newBillDueDate.getMonth() + 3); // Set the new due date to 3 months after the current due date
        } else if (bill.repeat === "4Month") {
          // If the repeat value is 4Month
          newBillDueDate.setMonth(newBillDueDate.getMonth() + 4); // Set the new due date to 4 months after the current due date
        } else if (bill.repeat === "6Month") {
          // If the repeat value is 6Month
          newBillDueDate.setMonth(newBillDueDate.getMonth() + 6); // Set the new due date to 6 months after the current due date
        } else if (bill.repeat === "Year") {
          // If the repeat value is Year
          newBillDueDate.setFullYear(newBillDueDate.getFullYear() + 1); // Set the new due date to 1 year after the current due date
        }

        // Second, create a new bill object for the next due date
        const newBillObject: Bill = {
          id: Math.random().toString(36).substr(2, 9), // Create a new id for the bill
          name: bill.name, // Set the name of the bill to the name of the bill
          type: bill.type, // Set the type of the bill to the type of the bill
          amount: bill.amount, // Set the amount of the bill to the amount of the bill
          dueDate: newBillDueDate.toISOString().split("T")[0], // Set the due date of the bill to the new due date (formatted as "YYYY-MM-DD")
          repeat: bill.repeat, // Set the repeat property of the bill to the repeat property of the bill
          paid: false, // Set the paid property of the bill to false
        };

        // Third, add the new bill to the bills array
        updatedBills.push(newBillObject); // Push the new bill object to the bills array

        // Fourth, schedule notifications for the new bill
        const billDueDatePriorWeek = new Date(newBillObject.dueDate); // Create a new date object with the due date of the new bill
        billDueDatePriorWeek.setDate(billDueDatePriorWeek.getDate() - 7); // Set the new due date to 7 days before the due date
        const today = new Date(); // Create a new date object with the current date
        const todayPlusOneWeek = new Date(); // Create a new date object with the current date
        todayPlusOneWeek.setDate(todayPlusOneWeek.getDate() + 7); // Set the new date to 7 days from the current date

        const billPastDue = new Date(newBillObject.dueDate); // Create a new date object with the due date of the new bill
        billPastDue.setDate(billPastDue.getDate() + 1); // Set the new past due date to 1 day after the due date

        const dateDueAsArray = newBillObject.dueDate.split("-"); // Split the due date of the new bill into an array
        const dueMonth = dateDueAsArray[1]; // Set the dueMonth to the second item in the array
        const dueDay = dateDueAsArray[2]; // Set the dueDay to the third item in the array
        const dueYear = dateDueAsArray[0]; // Set the dueYear to the first item in the array
        const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`; // Reorder the array to a string in the format "MM/DD/YYYY" (US format)

        const billDueDate = new Date(dueDateString); // Create a new date object with the newly formatted due date

        // if the bill is due today or later, schedule a notification for today
        if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {
          scheduleNewLocalNotification(
            strings.DUE_TODAY,
            `${strings.DUE_YOUR} ${newBillObject.name} ${strings.DUE_BILL_TODAY}.`,
            newBillObject.dueDate,
            newBillObject.id
          );
        }

        // if the bill is due later than a week from today, schedule a notification for a week before the due date
        if (
          billDueDate.setHours(0, 0, 0, 0) >=
          todayPlusOneWeek.setHours(0, 0, 0, 0)
        ) {
          scheduleNewLocalNotification(
            strings.DUE_WEEK,
            `${strings.DUE_YOUR} ${newBillObject.name} ${strings.DUE_BILL_WEEK}.`,
            billDueDatePriorWeek.toISOString().substring(0, 10),
            newBillObject.id
          );
        }

        // schedule a notification the day the bill is past due
        if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {
          scheduleNewLocalNotification(
            strings.DUE_PASTDUE,
            `${strings.DUE_YOUR} ${newBillObject.name} ${strings.DUE_BILL_PASTDUE}.`,
            billPastDue.toISOString().substring(0, 10),
            newBillObject.id
          );
        }
      }
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
