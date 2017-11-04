import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrimaryViewPage } from '../primary-view/primary-view'
import { SecondaryViewPage } from '../secondary-view/secondary-view'
import { BudgetViewPage } from '../budget-view/budget-view'
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public rp : RestapiServiceProvider) {
    this.rp.getData()
  }

  goToPrimary(){
    this.navCtrl.push(PrimaryViewPage);
  }

  goToSecondary(){
    this.navCtrl.push(SecondaryViewPage);
  }
}
