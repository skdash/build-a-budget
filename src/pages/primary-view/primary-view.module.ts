import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryViewPage } from './primary-view';

@NgModule({
  declarations: [
    PrimaryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryViewPage),
  ],
})
export class PrimaryViewPageModule {}
