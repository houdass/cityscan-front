import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab0Root: any = 'LoginPage';
  tab1Root: any = 'HomePage';
  tab2Root: any = 'AboutPage';

  constructor() {}
}
