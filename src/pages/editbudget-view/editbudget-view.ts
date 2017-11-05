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
  public transactions = [];
  public transactionbycustomer = [];
  public selected_transactions = [];
  public october_total = 0;
  public september_total = 0;
  public october_rewards = 0;
  public september_rewards = 0;

  constructor(public navCtrl: NavController, public rp : RestapiServiceProvider) {
    this.rp.getCategories().forEach((data) => this.categories.push(data))

    this.transactions = this.rp.returntransactionData();

    for (var i=0;i<this.transactions[0].customers.length;i++){
    this.transactionbycustomer.push(this.transactions[0].customers[i]);
  }

  for (var j=0;j<this.transactionbycustomer.length ;j++){
     if(this.transactionbycustomer[j].customer_id == 100720000){
       this.selected_transactions = this.transactionbycustomer[j].transactions;
    }
  }

  }

  goToReview(){
    this.navCtrl.push(ReviewBudgetViewPage)
  }
  routeBack(){
    this.navCtrl.pop()
  }

  smartBudget(){
    console.log("Length: ", this.selected_transactions.length);

    for (var k=0;k<this.selected_transactions.length ;k++){
     if(this.selected_transactions[k].year == 2017 && this.selected_transactions[k].month == "October"){
       this.october_total = this.october_total + this.selected_transactions[k].amount;
       this.october_rewards += this.selected_transactions[k].rewards_earned;
    }
    if(this.selected_transactions[k].year == 2017 && this.selected_transactions[k].month == "September"){
       console.log("September: ", this.selected_transactions[k]);
       this.september_total += this.selected_transactions[k].amount;
       this.september_rewards += this.selected_transactions[k].rewards_earned;
    }
  }

    console.log("September Expenditure: ", this.september_total)
    console.log("October Expenditure: ", this.october_total)
    console.log("September Rewards: ", this.september_rewards)
    console.log("October Rewards: ", this.october_rewards)

  }

  recalculateTotal(newValue){
    console.log('In recalculate method ' + newValue)
    //this.total = this.total + newValue
  }
}
