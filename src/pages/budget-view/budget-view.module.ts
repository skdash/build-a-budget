import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetViewPage } from './budget-view';

@NgModule({
  declarations: [
    BudgetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetViewPage),
  ],
})
export class BudgetViewPageModule {}
