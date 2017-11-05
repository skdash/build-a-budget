import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBudgetViewPage } from './editbudget-view';

@NgModule({
  declarations: [
    EditBudgetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBudgetViewPage),
  ],
})
export class EditBudgetViewPageModule {}
