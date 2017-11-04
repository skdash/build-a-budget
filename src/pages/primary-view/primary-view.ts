import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardViewPage } from '../dashboard-view/dashboard-view'
import { UsersViewPage } from '../users-view/users-view'
import { ApproveViewPage } from '../approve-view/approve-view'

@IonicPage()
@Component({
  selector: 'page-primary-view',
  templateUrl: 'primary-view.html',
})
export class PrimaryViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimaryViewPage');
  }

}
