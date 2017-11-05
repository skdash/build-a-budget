import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BudgetViewPage } from '../budget-view/budget-view'
import { TransactionsViewPage } from '../transactions-view/transactions-view'
import { EditBudgetViewPage } from '../editbudget-view/editbudget-view'

/**
 * Generated class for the SecondaryViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondary-view',
  templateUrl: 'secondary-view.html',
})
export class SecondaryViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToBudget(){
    //this.navCtrl.push(BudgetViewPage);
    this.navCtrl.push(EditBudgetViewPage)
  }

  goToTransactions(){
    this.navCtrl.push(TransactionsViewPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondaryViewPage');
  }

}
