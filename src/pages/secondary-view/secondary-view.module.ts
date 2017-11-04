import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondaryViewPage } from './secondary-view';

@NgModule({
  declarations: [
    SecondaryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondaryViewPage),
  ],
})
export class SecondaryViewPageModule {}
