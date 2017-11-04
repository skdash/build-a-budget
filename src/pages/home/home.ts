import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrimaryViewPage } from '../primary-view/primary-view'
import { SecondaryViewPage } from '../secondary-view/secondary-view'
import { BudgetViewPage } from '../budget-view/budget-view'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToPrimary(){
    this.navCtrl.push(PrimaryViewPage);
  }

  goToSecondary(){
    this.navCtrl.push(SecondaryViewPage);
  }
}
