import { hapticsImpactLight } from "../capacitor/haptics";
import {
  cancelPendingLocalNotifications,
  getPendingLocalNotifications,
  scheduleLocalNotification,
} from "../capacitor/localNotifications";
import { Bill } from "../interfaces/interfaces";
import { getStoredData, store } from "./storedData";

const scheduleNewLocalNotification = async (
  title: string,
  body: string,
  date: string,
  extra?: any
) => {
  return scheduleLocalNotification(title, body, date, extra);
};

export const addBill = async (
  newBill: Bill,
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void,
  setSortedDataToState: (arg0: Bill[]) => void
) => {
  // This function adds a new bill to the bills object in the storage of the device and sets the sorted data to state

  // // Check if the newBill object has all the required properties
  // if (!newBill.name || !newBill.type || !newBill.amount || !newBill.dueDate) {
  //   presentToast("bottom", "Please fill in all fields"); // Call the presentToast function
  //   return; // Return nothing
  // }

  const bills = await getStoredData(); // Get the bills object from the storage of the device
  const newBills = [...bills, newBill]; // Create a new array with the new bill added to the existing bills array
  await store.set("mybills", newBills); // Set the new bills array to the storage of the device
  setSortedDataToState(newBills); // Set the sorted data to state

  const billDueDatePriorWeek = new Date(newBill.dueDate);
  billDueDatePriorWeek.setDate(billDueDatePriorWeek.getDate() - 7);
  const today = new Date();

  const todayPlusOneWeek = new Date();
  todayPlusOneWeek.setDate(todayPlusOneWeek.getDate() + 7);

  const billPastDue = new Date(newBill.dueDate);
  billPastDue.setDate(billPastDue.getDate() + 1);

  const dateDueAsArray = newBill.dueDate.split("-");
  const dueMonth = dateDueAsArray[1];
  const dueDay = dateDueAsArray[2];
  const dueYear = dateDueAsArray[0];
  const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`;

  const billDueDate = new Date(dueDateString);

  // if the bill is due today or later, schedule a notification for today
  if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
    scheduleNewLocalNotification(
      "Bill due today",
      `Your ${newBill.name} bill is due today.`,
      newBill.dueDate,
      newBill.id
    );

  // if the bill is due later than a week from today, schedule a notification for a week before the due date
  if (
    billDueDate.setHours(0, 0, 0, 0) >= todayPlusOneWeek.setHours(0, 0, 0, 0)
  ) {
    scheduleNewLocalNotification(
      "Bill due in one week",
      `Your ${newBill.name} bill is due in one week.`,
      billDueDatePriorWeek.toISOString().substring(0, 10),
      newBill.id
    );
  }

  // schedule a notification the day the bill is past due
  if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
    scheduleNewLocalNotification(
      "Bill past due",
      `Your ${newBill.name} bill is past due.`,
      billPastDue.toISOString().substring(0, 10),
      newBill.id
    );

  presentToast("bottom", "Bill added successfully"); // Call the presentToast function
};

export const updateBill = async (
  updatedBill: Bill,
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void,
  setSortedDataToState: (arg0: Bill[]) => void
) => {
  // This function updates a bill in the bills object in the storage of the device and sets the sorted data to state

  // // Check if the updatedBill object has all the required properties
  // if (
  //   !updatedBill.name ||
  //   !updatedBill.type ||
  //   !updatedBill.amount ||
  //   !updatedBill.dueDate
  // ) {
  //   presentToast("bottom", "Please fill in all fields"); // Call the presentToast function
  //   return; // Return nothing
  // }

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

  const notifications = await getPendingLocalNotifications();
  const id = notifications?.notifications.find(
    (notification) => notification.extra.id === updatedBill.id
  )?.id;

  // for each pendingNotification in notifications.notifications, if the id matches the deletedBill.id, cancel the notification
  notifications?.notifications.forEach(async (notification) => {
    if (notification.extra.id === updatedBill.id) {
      await cancelPendingLocalNotifications(notification.id);
    }
  });

  const billDueDatePriorWeek = new Date(updatedBill.dueDate);
  billDueDatePriorWeek.setDate(billDueDatePriorWeek.getDate() - 7);
  const today = new Date();
  const todayPlusOneWeek = new Date();
  todayPlusOneWeek.setDate(todayPlusOneWeek.getDate() + 7);

  const billPastDue = new Date(updatedBill.dueDate);
  billPastDue.setDate(billPastDue.getDate() + 1);

  const dateDueAsArray = updatedBill.dueDate.split("-");
  const dueMonth = dateDueAsArray[1];
  const dueDay = dateDueAsArray[2];
  const dueYear = dateDueAsArray[0];
  const dueDateString = `${dueMonth}/${dueDay}/${dueYear}`;

  const billDueDate = new Date(dueDateString);

  // if the bill is due today or later, schedule a notification for today
  if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
    scheduleNewLocalNotification(
      "Bill due today",
      `Your ${updatedBill.name} bill is due today.`,
      updatedBill.dueDate,
      updatedBill.id
    );

  // if the bill is due later than a week from today, schedule a notification for a week before the due date
  if (billDueDate.setHours(0, 0, 0, 0) >= todayPlusOneWeek.setHours(0, 0, 0, 0))
    scheduleNewLocalNotification(
      "Bill due in one week",
      `Your ${updatedBill.name} bill is due in one week.`,
      billDueDatePriorWeek.toISOString().substring(0, 10),
      updatedBill.id
    );

  // schedule a notification the day the bill is past due
  if (billDueDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0))
    scheduleNewLocalNotification(
      "Bill past due",
      `Your ${updatedBill.name} bill is past due.`,
      billPastDue.toISOString().substring(0, 10),
      updatedBill.id
    );

  presentToast("bottom", "Bill updated successfully"); // Call the presentToast function
  // // close any open sliding items
  // todaysBillsRef.current?.closeOpened();
  // upcomingBillsRef.current?.closeOpened();
  // pastDueBillsRef.current?.closeOpened();
  // paidBillsRef.current?.closeOpened();
};

export const deleteBill = async (
  deletedBill: Bill,
  presentAlert: (arg0: {
    header: string;
    message: string;
    buttons: any[];
  }) => void,
  presentToast: (
    position: "top" | "middle" | "bottom",
    message: string
  ) => void,
  setSortedDataToState: (arg0: Bill[]) => void
) => {
  // This function deletes a bill from the bills object in the storage of the device and sets the sorted data to state
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
          hapticsImpactLight(); // Trigger a light haptic feedback
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

          const notifications = await getPendingLocalNotifications();
          const id = notifications?.notifications.find(
            (notification) => notification.extra.id === deletedBill.id
          )?.id;

          // for each pendingNotification in notifications.notifications, if the id matches the deletedBill.id, cancel the notification
          notifications?.notifications.forEach(async (notification) => {
            if (notification.extra.id === deletedBill.id) {
              await cancelPendingLocalNotifications(notification.id);
            }
          });

          presentToast("bottom", "Bill deleted successfully"); // Call the presentToast function
          // // close any open sliding items
          // todaysBillsRef.current?.closeOpened();
          // upcomingBillsRef.current?.closeOpened();
          // pastDueBillsRef.current?.closeOpened();
          // paidBillsRef.current?.closeOpened();
          // hapticsImpactLight(); // Trigger a light haptic feedback
        },
      },
    ],
  });
};
