import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.litestep.pocketbills",
  appName: "PocketBills",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    Badge: {
      persist: true,
      autoClear: true,
    },
    LocalNotifications: {
      iconColor: "#488AFF",
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["apple.com", "facebook.com"],
    },
  },
};

export default config;
