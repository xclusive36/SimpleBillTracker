import { Keyboard } from "@capacitor/keyboard";
import { Capacitor } from "@capacitor/core";

export const keyboardWillShow = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.setAccessoryBarVisible({ isVisible: true });
        Keyboard.addListener("keyboardWillShow", (info) => {
            console.log("keyboard will show with height:", info.keyboardHeight);
        });
    }
};

export const keyboardDidShow = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.addListener("keyboardDidShow", (info) => {
            console.log("keyboard did show with height:", info.keyboardHeight);
        });
    }
};

export const keyboardWillHide = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.addListener("keyboardWillHide", () => {
            console.log("keyboard will hide");
        });
    }
};

export const keyboardDidHide = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.addListener("keyboardDidHide", () => {
            console.log("keyboard did hide");
        });
    }
};

export const removeAllKeyboardListeners = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.removeAllListeners();
    }
};

export const setAccessoryBarVisible = (visible: boolean) => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.setAccessoryBarVisible({ isVisible: visible });
    }
};

export const hideKeyboard = () => {
    if (Capacitor.isNativePlatform()) {
        Keyboard.hide();
    }
};