import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Capacitor } from "@capacitor/core";

export const hapticsImpact = (style = ImpactStyle.Heavy) => {
  if (Capacitor.isNativePlatform()) {
    Haptics.impact({
      style: style,
    });
  }
};

export const hapticsImpactMedium = (style = ImpactStyle.Medium) => {
  if (Capacitor.isNativePlatform()) {
    hapticsImpact(style);
  }
};

export const hapticsImpactLight = (style = ImpactStyle.Light) => {
  if (Capacitor.isNativePlatform()) {
    hapticsImpact(style);
  }
};

export const hapticsVibrate = () => {
  if (Capacitor.isNativePlatform()) {
    Haptics.vibrate();
  }
};

export const hapticsNotification = (style: any) => {
  if (Capacitor.isNativePlatform()) {
    Haptics.notification();
  }
};

// Interfaces Used
//
// ImpactStyle
// enum HapticsImpactStyle {
//   Heavy: "HEAVY"
//   Light: "LIGHT"
//   Medium: "MEDIUM"
// }
//
// HapticsNotificationType
// enum HapticsNotificationType {
//   ERROR: "ERROR"
//   SUCCESS: "SUCCESS"
//   WARNING: "WARNING"
// }
