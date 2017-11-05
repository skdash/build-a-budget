import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service'
import {ReviewBudgetViewPage} from '../reviewbudget-view/reviewbudget-view'

@Component({
  selector: 'page-editbudget',
  templateUrl: 'editbudget-view.html'
})
export class EditBudgetViewPage {
  total : number = 0
  categories : string [] = new Array()
  constructor(public navCtrl: NavController, public rp : RestapiServiceProvider) {
    this.rp.getCategories().forEach((data) => this.categories.push(data))
  }

  goToReview(){
    this.navCtrl.push(ReviewBudgetViewPage)
  }
  routeBack(){
    this.navCtrl.pop()
  }
  recalculateTotal(newValue){
    console.log('In recalculate method ' + newValue)
    //this.total = this.total + newValue
  }
}
