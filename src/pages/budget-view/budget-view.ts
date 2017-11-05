import { Component } from '@angular/core';
import { StartBudgetViewPage } from '../startbudget-view/startbudget-view'
import { EditBudgetViewPage } from '../editbudget-view/editbudget-view'
import { ReviewBudgetViewPage } from '../reviewbudget-view/reviewbudget-view'
import { SubmitBudgetViewPage } from '../submitbudget-view/submitbudget-view'
 


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
    <ion-tabs tabsPlacement="top">
      <ion-tab tabTitle="Start" [root]="tab1Root"></ion-tab>
      <ion-tab tabTitle="Budget" [root]="tab2Root"></ion-tab>
      <ion-tab tabTitle="Review" [root]="tab3Root"></ion-tab>
      <ion-tab tabTitle="Submit" [root]="tab4Root"></ion-tab>
    </ion-tabs>
`})
export class TabBasicContentPage {

}

@Component({
  template: `
    <ion-tabs class="tabs-icon-top tabs-balanced">
      <ion-tab tabTitle="Start" [root]="tab1Root"></ion-tab>
      <ion-tab tabTitle="Budget" [root]="tab2Root"></ion-tab>
      <ion-tab tabTitle="Review" [root]="tab3Root"></ion-tab>
      <ion-tab tabTitle="Submit" [root]="tab4Root"></ion-tab>
    </ion-tabs>
`})
export class BudgetViewPage {
  tab1Root = StartBudgetViewPage;
  tab2Root = EditBudgetViewPage;
  tab3Root = ReviewBudgetViewPage;
  tab4Root = SubmitBudgetViewPage;
  constructor() {
       
  }
}
