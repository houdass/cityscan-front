import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

import {LoginService} from '../../providers/login.service';
import {SessionService} from '../../core/session/session.service';

import {TabsPage} from '../tabs/tabs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any = {};

  backgrounds = [
    'assets/img/bg1.jpg',
    'assets/img/bg2.jpg',
    'assets/img/bg3.jpg',
    'assets/img/bg4.jpg'
  ];
  public loginForm: any;

  constructor(public navCtrl: NavController,
              public loginService: LoginService,
              public sessionService: SessionService) {
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    debugger
    const userEmail = this.user.email;
    const userPassword = this.user.password;

    if (userEmail === '' || userPassword === '') {
      this.showError();
    } else {
      this.loginService.login(this.user)
      .then((response) => {
        this.loginSucceed(response);
      }, (error) => {
        this.showError(error);
      });
    }
  }

  loginSucceed(response: any) {
    if (this.sessionService.create(response)) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.showError();
    }
  }

  showError(error?: any) {
    // console.log('Oops!', 'Login ou mot de passe incorrect', error);
  }
}
