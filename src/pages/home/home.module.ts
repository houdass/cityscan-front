import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { CityScanService } from '../../providers/cityscan.service';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    NgSelectModule
  ],
  providers: [
    CityScanService
  ]
})
export class HomePageModule {}
