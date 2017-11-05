import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ReviewBudgetViewPage } from '../reviewbudget-view/reviewbudget-view'
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service'



@IonicPage()
@Component({
  selector: 'page-approve-view',
  templateUrl: 'approve-view.html',
})
export class ApproveViewPage {

  public data:any;
  public authorized_users = [];
  public secondary_customers = [];

  constructor(public navCtrl: NavController, public rp : RestapiServiceProvider) {
    this.data = this.rp.returnData();
	this.authorized_users = this.rp.returncustomerData();
	for (var i=0;i<this.authorized_users.length;i++){
		this.secondary_customers.push(this.authorized_users[i][0].customers[0]);
	}

  }

  filterItemsOfType(){
    return this.secondary_customers.filter(x => x.is_primary == false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproveViewPage');
  }

  goToReview() {
    this.navCtrl.push(ReviewBudgetViewPage);
  }

}
