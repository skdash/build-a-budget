import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardViewPage } from './dashboard-view';

@NgModule({
  declarations: [
    DashboardViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardViewPage),
  ],
})
export class DashboardViewPageModule {}
