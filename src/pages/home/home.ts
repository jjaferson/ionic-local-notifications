import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ErrorHandler, NgModule } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    LocalNotifications
  ]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private localNote: LocalNotifications
  ) {

  }

  public setLocalNotification(): void{
    console.log('here');
    let notification = 
      {
        text: 'blablabla',
        at: new Date(new Date().getTime() + 20000)
      };
    console.log('notification fired', notification);
    this.localNote.schedule(notification)
  }

}
