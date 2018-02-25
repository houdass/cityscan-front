import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LoginService } from '../../providers/login.service';
import { SessionService } from '../../core/session/session.service';

import { TabsPage } from '../tabs/tabs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  loader: any;
  backgrounds = [
    'assets/img/bg1.jpg',
    'assets/img/bg2.jpg',
    'assets/img/bg3.jpg',
    'assets/img/bg4.jpg'
  ];

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private sessionService: SessionService,
              private fb: FormBuilder,
              public loadingCtrl: LoadingController) {

    this.emailCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });


    this.loader = this.loadingCtrl.create({
      content: `Veuillez patienter un instant s'il vous plait...`,
      spinner: 'dots'
    });
  }

  ionViewDidLoad() {
    if (this.sessionService.isAuthenticated()) {
      this.navCtrl.setRoot(TabsPage);
    }
  }

  login() {
    if (this.userForm.valid) {
      this.loader.present();
      const email = this.emailCtrl.value;
      const password = this.passwordCtrl.value;
      this.loginService.login({ email, password })
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
    this.loader.dismiss();
  }

  showError(error?: any) {
    // console.log('Oops!', 'Login ou mot de passe incorrect', error);
  }

  openResetPassword() {
    console.log('Open Reset Password');
  }

}
