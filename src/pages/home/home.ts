import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  search() {
    this.navCtrl.push(AboutPage);
  }
}
