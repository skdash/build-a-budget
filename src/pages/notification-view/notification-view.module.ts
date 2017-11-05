import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsViewPage } from './notification-view';

@NgModule({
  declarations: [
    NotificationsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsViewPage),
  ],
})
export class NotificationsViewPageModule {}
