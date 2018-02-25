import { NgModule } from '@angular/core';
import { ListPage } from './list';
import { IonicPageModule } from 'ionic-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { CityScanService } from '../../providers/cityscan.service';

@NgModule({
  declarations: [ListPage],
  imports: [
    IonicPageModule.forChild(ListPage),
    NgSelectModule
  ],
  providers: [
    CityScanService
  ]
})
export class ListPageModule {}
