import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service'
import {ReviewBudgetViewPage} from '../reviewbudget-view/reviewbudget-view'

@Component({
  selector: 'page-editbudget',
  templateUrl: 'editbudget-view.html'
})
export class EditBudgetViewPage {
  @Input() total = 0;
  //total : number = 0
  categories : string [] = new Array()
  public transactions = [];
  public transactionbycustomer = [];
  public selected_transactions = [];
  public october_total = 0;
  public september_total = 0;
  public october_rewards = 0;
  public september_rewards = 0;

  val1 : string = '0.00'
  val2 : string = '0.00'
  val3 : string = '0.00'
  val4 : string = '0.00'
  val0 : string = '0.00'

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
    this.value1 = '$100.50'
    this.value2 = '$43.00'
    this.value3 = '$77.00'
    this.value4 = '$90.89'
    this.value5 = '$150.00'

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
