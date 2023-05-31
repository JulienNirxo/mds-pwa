import { Component } from '@angular/core'
import { SwPush } from '@angular/service-worker'

const VAPID_PUBLIC =
  'BPIf3btGAP3Sq2f-4S0WS2DtbCSnbFbtYGA_6c6nNZ_DsIaCLMFu1fxO30Odkcy8ror-5OdP4_4vyJO4FTZVGYY'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-push-notifications'

  constructor(swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then(subscription => {
          console.log(subscription)
        })
        .catch(console.error)
    }
  }
}