import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DashboardViewPage } from '../dashboard-view/dashboard-view'
import { UsersViewPage } from '../users-view/users-view'
import { ApproveViewPage } from '../approve-view/approve-view'

@IonicPage()
@Component({
  selector: 'page-primary-view',
  templateUrl: 'primary-view.html',
})
export class PrimaryViewPage {

  testCheckboxOpen: any;
  testCheckboxResult: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  goToDashboard(){
    this.navCtrl.push(DashboardViewPage);
  }

  goToManageUser(){
    this.navCtrl.push(UsersViewPage);
  }

  goToApprove(){
    this.navCtrl.push(ApproveViewPage);
  }

  goToEmergency(){
      let alert = this.alertCtrl.create();
    alert.setTitle('Emergency Senarios');

    alert.addInput({
      type: 'checkbox',
      label: 'Accidents',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Medical',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Transportation',
      value: 'value1'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimaryViewPage');
  }

}
