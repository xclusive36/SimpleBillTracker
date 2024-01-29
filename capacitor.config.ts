import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Simple Bill Tracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
