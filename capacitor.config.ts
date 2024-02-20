import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.litestep.simplebilltracker",
  appName: "Simple Bill Tracker",
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
  },
};

export default config;
