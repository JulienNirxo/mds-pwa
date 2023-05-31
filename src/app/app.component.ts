import { Component } from '@angular/core'
import { SwPush } from '@angular/service-worker'

const VAPID_PUBLIC = 'BPIf3btGAP3Sq2f-4S0WS2DtbCSnbFbtYGA_6c6nNZ_DsIaCLMFu1fxO30Odkcy8ror-5OdP4_4vyJO4FTZVGYY'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular'

  //création d'un constructeur pour l'initialisation du service worker
  constructor(swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then(subscription => {
          console.log(subscription)
          this.showPushNotification()
        })
        .catch(console.error)
    }
  }

  //fonction pour afficher la notification
  showPushNotification() {
    if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        var n = new Notification("Ma notification", {
          body: "Salut MDS !",
        });
      });
    }

  }
}