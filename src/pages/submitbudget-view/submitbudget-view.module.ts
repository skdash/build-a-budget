import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitBudgetViewPage } from './submitbudget-view';

@NgModule({
  declarations: [
    SubmitBudgetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitBudgetViewPage),
  ],
})
export class SubmitBudgetViewPageModule {}
