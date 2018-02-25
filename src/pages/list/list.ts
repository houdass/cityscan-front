import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { CityScanService } from '../../providers/cityscan.service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  loader: any;
  loaderPdf: any;
  result: any;
  showInfos: any;

  constructor(public navCtrl: NavController,
              private cityScanService: CityScanService,
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: `Veuillez patienter un instant s'il vous plait...`,
      spinner: 'dots'
    });
    this.loader.present().then(() => {
      this.cityScanService
      .analyze(this.navParams.get('params'))
      .then((response) => {
        this.loader.dismiss();
        this.showInfos = true;
        this.result = response;
      })
      .catch((err) => {
        this.loader.dismiss();
      });
    });
  }

  pdf() {
    this.showLoading();
    this.cityScanService
    .pdfPost(this.result)
    .then((response) => {
      this.dismissLoading();
    })
    .catch((err) => {
      this.dismissLoading();
    });
  }

  showLoading() {
    if (!this.loaderPdf) {
      this.loaderPdf = this.loadingCtrl.create({
        content: `Veuillez patienter un instant s'il vous plait, génération du rapport en cours...`,
        spinner: 'dots'
      });
      this.loaderPdf.present();
    }
  }

  dismissLoading() {
    if (this.loaderPdf) {
      this.loaderPdf.dismiss();
      this.loaderPdf = null;
    }
  }
}
