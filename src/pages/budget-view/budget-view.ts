import { Component } from '@angular/core';
import { StartBudgetViewPage } from '../startbudget-view/startbudget-view'
import { EditBudgetPage } from '../editbudget-view/editbudget-view'
import { ReviewBudgetPage } from '../reviewbudget-view/reviewbudget-view'
import { SubmitBudgetPage } from '../submitbudget-view/submitbudget-view'
 


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
  tab2Root = EditBudgetPage;
  tab3Root = ReviewBudgetPage;
  tab4Root = SubmitBudgetPage;
  constructor() {
       
  }
}
