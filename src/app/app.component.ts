import { Component } from '@angular/core'
import { SwPush } from '@angular/service-worker'
import Pusher from 'pusher-js';


const VAPID_PUBLIC = 'BPIf3btGAP3Sq2f-4S0WS2DtbCSnbFbtYGA_6c6nNZ_DsIaCLMFu1fxO30Odkcy8ror-5OdP4_4vyJO4FTZVGYY';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';

  constructor(private swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then(subscription => {
          console.log(subscription);
          this.showPushNotification();
        })
        .catch(console.error);
    }
  }

  showPushNotification() {
    if (window.Notification && Notification.permission !== 'denied') {
      Notification.requestPermission(function (status) {
        const n = new Notification('Ma notification', {
          body: 'Salut MDS!',
        });
      });
    }

    const pusher = new Pusher('67377cc9-cb2e-499e-b07b-b637506cf3b8', {
      cluster: 'ECF800C959B3B96F2FB99C4E97CACF304399F7D69A82DA8A72ADD197718CF303',
    });

    const channel = pusher.subscribe('nom-du-canal');
    channel.bind('nom-de-l-événement', (data: any) => {
      console.log('Notification reçue:', data);
    });
  }
}
