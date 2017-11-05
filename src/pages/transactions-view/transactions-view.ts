import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service'



@IonicPage()
@Component({
  selector: 'page-transactions-view',
  templateUrl: 'transactions-view.html',
})
export class TransactionsViewPage {

  public transactions = [];
  public transactionbycustomer = [];
  public selected_transactions = [];

  constructor(public navCtrl: NavController, public rp : RestapiServiceProvider) {
    this.transactions = this.rp.returntransactionData();

	for (var i=0;i<this.transactions[0].customers.length;i++){
		this.transactionbycustomer.push(this.transactions[0].customers[i]);
	}

	for (var j=0;j<this.transactionbycustomer.length ;j++){
	   if(this.transactionbycustomer[j].customer_id == 100720000){
		   this.selected_transactions = this.transactionbycustomer[j].transactions;
		}
	}
	console.log(this.selected_transactions)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsViewPage');
  }

}
 