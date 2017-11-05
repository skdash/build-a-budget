import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewBudgetViewPage } from './reviewbudget-view';

@NgModule({
  declarations: [
    ReviewBudgetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewBudgetViewPage),
  ],
})
export class ReviewBudgetViewPageModule {}
