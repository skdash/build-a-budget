import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SubmitBudgetViewPage } from '../submitbudget-view/submitbudget-view'


@Component({
  selector: 'page-reviewbudget',
  templateUrl: 'reviewbudget-view.html'
})
export class ReviewBudgetViewPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

  showConfirmation(){
      let prompt = this.alertCtrl.create({
      title: 'Approve Budget',
      message: "Enter review comments",
      inputs: [
        {
          name: 'title',
          placeholder: 'Comments'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            this.navCtrl.push(SubmitBudgetViewPage);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
