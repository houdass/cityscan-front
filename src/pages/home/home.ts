import { Component, EventEmitter } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CityScanService } from '../../providers/cityscan.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: any;
  productTypeId: any;
  places = [];

  productTypes = [
    {
      id: 1,
      label: 'Appartement'
    },
    {
      id: 2,
      label: 'Maison / Villa'
    },
    {
      id: 3,
      label: 'Parking'
    },
    {
      id: 4,
      label: 'Terrain'
    }
  ];

  // event emmiter is just RxJs Subject
  typeahead = new EventEmitter<string>();

  constructor(public navCtrl: NavController,
              private cityScanService: CityScanService) {

    this.typeahead
    .filter((query) => query.length > 1)
    .distinctUntilChanged()
    .debounceTime(200)
    .switchMap(term => this.cityScanService.getPlaces(term))
    .subscribe(items => {
      this.places = items;
    }, (err) => {
      this.places = [];
    });
  }

  search() {
    this.params.productTypeId = this.productTypeId;
    const params = this.params;
    this.navCtrl.setRoot(ListPage, { params });
  }
}
