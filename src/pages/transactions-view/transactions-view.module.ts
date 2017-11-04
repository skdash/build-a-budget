import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionsViewPage } from './transactions-view';

@NgModule({
  declarations: [
    TransactionsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionsViewPage),
  ],
})
export class TransactionsViewPageModule {}
