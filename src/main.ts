import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if ('serviceWorker' in navigator) {
  console.log("Service Worker is supported");
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/assets/serviceworker.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      })
      .catch((err) => {
        console.log('Service worker registration failed:', err);
      }
      );
  });
}
