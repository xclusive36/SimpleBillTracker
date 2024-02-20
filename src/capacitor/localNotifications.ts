import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { repeat } from "ionicons/icons";
import { increaseBadge } from "./badge";

export const scheduleLocalNotification = async (
  title: string,
  body: string,
  date: string,
  extra?: any
) => {
  if (Capacitor.isNativePlatform()) {
    const convertDateToString = (date: string) => {
      const dateDueAsArray = date.split("-");
      const dueMonth = dateDueAsArray[1];
      const dueDay = dateDueAsArray[2];
      const dueYear = dateDueAsArray[0];
      return `${dueMonth}/${dueDay}/${dueYear} 00:00:00`;
    };

    await LocalNotifications.schedule({
      notifications: [
        {
          // generate a random number for the id
          id: Math.floor(Math.random() * 100),
          title: title,
          body: body,
          sound: "beep.mp3",
          schedule: { at: new Date(convertDateToString(date)), repeats: false },
          extra: extra,
        },
      ],
    });
  }
};

export const getPendingLocalNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    const pending = await LocalNotifications.getPending();
    console.log("Pending notifications", pending);
  }
};

export const cancelPendingLocalNotifications = async (id: number) => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.cancel({ notifications: [{ id: id }] });
  }
};

export const checkIfLocalNotificationsAreEnabled = async () => {
  if (Capacitor.isNativePlatform()) {
    const { value } = await LocalNotifications.areEnabled();
    console.log("Local notifications enabled", value);
  }
};

export const getDeliveredLocalNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    const delivered = await LocalNotifications.getDeliveredNotifications();
    console.log("Delivered notifications", delivered);
  }
};

export const removeDeliveredNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.removeDeliveredNotifications({
      notifications: [
        {
          id: 1,
          title: "Title",
          body: "Body",
        },
      ],
    });
  }
};

export const removeAllDeliveredNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    return await LocalNotifications.removeAllDeliveredNotifications();
  }
};

export const checkLocalNotificationPermissions = async () => {
  if (Capacitor.isNativePlatform()) {
    return await LocalNotifications.checkPermissions();
  }
};

export const requestLocalNotificationPermissions = async () => {
  if (Capacitor.isNativePlatform()) {
    return await LocalNotifications.requestPermissions();
  }
};

export const localNotificationReceived = async () => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.addListener(
      "localNotificationReceived",
      (notification) => {
        console.log("Notification received", notification);
      }
    );
  }
};

export const localNotificationActionPerformed = async () => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (notification) => {
        console.log("Notification action performed", notification);
        increaseBadge();
      }
    );
  }
};

export const removeAllLocalNotificationListeners = async () => {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.removeAllListeners();
  }
};
