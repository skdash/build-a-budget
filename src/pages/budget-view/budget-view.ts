import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Start" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Budget" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Review" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Submit" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class TabBasicContentPage {

}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Start" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Budget" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Review" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Submit" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class BudgetViewPage {
  rootPage = TabBasicContentPage;
}
