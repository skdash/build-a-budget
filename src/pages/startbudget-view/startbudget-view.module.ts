import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartBudgetViewPage } from './startbudget-view';

@NgModule({
  declarations: [
    StartBudgetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(StartBudgetViewPage),
  ],
})
export class StartBudgetViewPageModule {}
