import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pwa',
  webDir: 'dist/pwa',
  server: {
    androidScheme: 'https'
  }
};

export default config;
