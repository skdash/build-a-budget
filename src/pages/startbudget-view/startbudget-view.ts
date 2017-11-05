import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditBudgetViewPage } from '../editbudget-view/editbudget-view'

@Component({
  selector: 'page-startbudget',
  templateUrl: 'startbudget-view.html'
})
export class StartBudgetViewPage {

  constructor(public navCtrl: NavController) {

  }
  goToBudget(){
    this.navCtrl.push(EditBudgetViewPage)
  }
}
