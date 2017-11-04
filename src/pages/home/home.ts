import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondaryViewPage } from '../secondary-view/secondary-view'
import { BudgetViewPage } from '../budget-view/budget-view'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goToSecondary(){
    this.navCtrl.push(SecondaryViewPage);
  }
}
