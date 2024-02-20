import { Badge } from "@capawesome/capacitor-badge";
import { Capacitor } from "@capacitor/core";

export const getBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    const result = await Badge.get();
    return result.count;
  }
};

export const setBadge = async (count: number) => {
  if (Capacitor.isNativePlatform()) {
    await Badge.set({ count });
  }
};

export const increaseBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    await Badge.increase();
  }
};

export const decreaseBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    await Badge.decrease();
  }
};

export const clearBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    await Badge.clear();
  }
};

export const isSupportedBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    const result = await Badge.isSupported();
    return result.isSupported;
  }
};

export const checkPermissionsBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    const result = await Badge.checkPermissions();
    return result;
  }
};

export const requestPermissionsBadge = async () => {
  if (Capacitor.isNativePlatform()) {
    const result = await Badge.requestPermissions();
    return result;
  }
};
